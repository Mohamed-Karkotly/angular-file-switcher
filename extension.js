const vscode = require('vscode');
const path = require('path');

function getFileExtensions() {
    const config = vscode.workspace.getConfiguration('angularFileSwitcher');
    let extensions = config.get('fileExtensions') || ['.ts', '.html', '.scss', '.css', '.spec.ts'];

    if (config.get('excludeSpecFiles', false)) extensions = extensions.filter(ext => ext !== '.spec.ts');

    return extensions;
}

async function getCurrentFile() {
    if (vscode.window.activeTextEditor) return vscode.window.activeTextEditor.document.fileName;

    return vscode.window.showErrorMessage('Please open a file to switch between Angular component files');
}

async function fileExists(filePath) {
    try {
        await vscode.workspace.fs.stat(vscode.Uri.file(filePath));
        return true;
    } catch {
        return false;
    }
}

async function switchFiles() {
    const currentFile = await getCurrentFile();
    if (!currentFile) return;

    const extensions = getFileExtensions();
    const currentExt = path.extname(currentFile);

    let baseName = currentFile;
    let actualCurrentExt = currentExt;

    if (currentFile.endsWith('.spec.ts')) {
        baseName = currentFile.replace(/\.spec\.ts$/, '');
        actualCurrentExt = '.spec.ts';
    } else {
        baseName = currentFile.replace(/\.(ts|html|scss|css)$/, '');
    }

    const currentIndex = extensions.indexOf(actualCurrentExt);

    if (currentIndex === -1) return vscode.window.showWarningMessage(`Current file extension "${actualCurrentExt}" is not in the configured extensions list`);

    for (let offset = 1; offset <= extensions.length; offset++) {
        const nextIndex = (currentIndex + offset) % extensions.length;
        const nextExt = extensions[nextIndex];

        let nextFile;
        if (nextExt === '.spec.ts') {
            nextFile = `${baseName}.spec.ts`;
        } else {
            nextFile = `${baseName}${nextExt}`;
        }

        if (await fileExists(nextFile)) {
            try {
                const config = vscode.workspace.getConfiguration('angularFileSwitcher');
                const openInNewTab = config.get('openInNewTab', false);

                if (!openInNewTab) await vscode.commands.executeCommand('workbench.action.closeActiveEditor');

                const doc = await vscode.workspace.openTextDocument(nextFile);
                await vscode.window.showTextDocument(doc, {
                    viewColumn: vscode.ViewColumn.Active,
                    preview: false
                });

                const fileName = path.basename(nextFile);
                return vscode.window.setStatusBarMessage(`Switched to ${fileName}`, 2000);
            } catch (error) {
                return vscode.window.showErrorMessage(`Failed to open file: ${error.message}`);
            }
        }
    }

    return vscode.window.showInformationMessage('No related Angular component files found');
}

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('angular-file-switcher.switch', switchFiles));
}

module.exports = { activate };
