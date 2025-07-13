# Changelog

All notable changes to the "Angular Component Switcher" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-07-13

### Changed
- Updated extension display name from "Angular File Switcher" to "Angular Component Switcher"
- Updated all documentation to reflect the new display name

## [1.0.0] - 2025-07-11

### Added
- Initial release of Angular Component Switcher extension
- Quick file switching between Angular component files (.ts, .html, .scss, .css, .spec.ts)
- Keyboard shortcut `Alt + S` (Windows/Linux) or `⌥ + S` (Mac) for file switching with smart file detection
- Support for all common Angular component file types:
  - TypeScript components (.ts)
  - HTML templates (.html)
  - SCSS stylesheets (.scss)
  - CSS stylesheets (.css)
  - Test files (.spec.ts)
- Configurable file extensions through `angularFileSwitcher.fileExtensions` setting
- Option to exclude .spec.ts files via `angularFileSwitcher.excludeSpecFiles` setting
- Option to open switched files in new tab via `angularFileSwitcher.openInNewTab` setting
- Smart .spec.ts file detection and handling
- Status bar feedback when switching files
- Comprehensive error handling and user feedback
- Proper VS Code activation events for relevant file types
- Complete documentation (README.md, CHANGELOG.md, LICENSE)
- Clean extension packaging with .vscodeignore

---

For more information about this extension, visit the [GitHub repository](https://github.com/Mohamed-Karkotly/angular-file-switcher). 