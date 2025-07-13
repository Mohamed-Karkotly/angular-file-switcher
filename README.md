# Angular File Switcher

A Visual Studio Code extension that allows you to quickly switch between Angular component files (.ts, .html, .scss, .css, .spec.ts) with a simple keyboard shortcut.

## Features

- **Quick File Switching**: Press `Alt + S` (Windows/Linux) or `⌥ + S` (Mac) to cycle through related Angular component files
- **Configurable Extensions**: Customize which file extensions to include in the switching cycle
- **Status Bar Feedback**: Shows confirmation when switching files
- **Error Handling**: Clear error messages when files are not found or accessible

## Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions
3. Search for "Angular File Switcher"
4. Click Install

### From VSIX Package
1. Download the `.vsix` file from the releases
2. In VS Code, press `Ctrl+Shift+P` to open the command palette
3. Type "Extensions: Install from VSIX"
4. Select the downloaded `.vsix` file

## Usage

1. Open any Angular component file (`.ts`, `.html`, `.scss`, `.css`, or `.spec.ts`)
2. Press `Alt + S` (Windows/Linux) or `⌥ + S` (Mac) (or `Cmd+Shift+P` and search for "Switch Angular Files")
3. The extension will cycle through all available related files

### Example

If you have these files in your project:
```
src/app/components/user-profile/
├── user-profile.component.ts
├── user-profile.component.html
├── user-profile.component.scss
└── user-profile.component.spec.ts
```

Starting from `user-profile.component.ts` and pressing `Alt + S` (Windows/Linux) or `⌥ + S` (Mac) will cycle through:
1. `user-profile.component.html`
2. `user-profile.component.scss`
3. `user-profile.component.spec.ts`
4. Back to `user-profile.component.ts`

## Configuration

You can customize the extension behavior through VS Code settings:

### File Extensions
Control which file extensions are included in the switching cycle:

```json
{
  "angularFileSwitcher.fileExtensions": [".ts", ".html", ".scss", ".css", ".spec.ts"]
}
```

### Exclude Spec Files
Exclude `.spec.ts` files from the switching cycle:

```json
{
  "angularFileSwitcher.excludeSpecFiles": true
}
```

### Open in New Tab
Choose whether to open the switched file in a new tab or replace the current tab:

```json
{
  "angularFileSwitcher.openInNewTab": true
}
```

When set to `true`, the extension will open the switched file in a new tab, keeping the current file open. When set to `false` (default), it will replace the current tab with the new file.

## Keyboard Shortcuts

| Shortcut | Command | Description |
|----------|---------|-------------|
| `Alt+S` | `angular-file-switcher.switch` | Switch to the next related Angular file |

You can customize the keyboard shortcut by going to `File > Preferences > Keyboard Shortcuts` and searching for "Switch Angular Files".

## Requirements

- Visual Studio Code 1.76.0 or higher
- Angular project with component files

## Contributing

If you find any issues or have suggestions for improvements, please create an issue on the GitHub repository.

## License

This extension is licensed under the MIT License.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

**Enjoy switching between your Angular files with ease!** 🚀 