# github-header
Github has changed their classname once again! This extension now makes the header color a random color, works as of November 2017.

Requests for colors welcome!

### Installation instructions:
1. Clone the repository to your machine.
2. Under your Chrome settings, click "Extensions" and enable developer mode.
3. Click "Load unpacked extension", select the repository and enable the extension.

### SUPER SECRET OPTIONS
| Key                   | Type    | Default | Description |
| ---                   | ---     | ---     | ---         |
| PARTY_MODE            | boolean | false   | Determines whether or not you like to party. **(WARNING: Turn on at your own risk if you suffer from epilepsy.)** |
| COLOR_CHANGE_DELAY    | number  | 200     | Delay (in ms) between color changes. |
| HEADER_SWIRL_DURATION | string  | '1s'    | Duration of one complete header swirl (must be a valid css animation duration string). |

To set options, run:
```js
localStorage['CE.GITHUB_HEADER.[OPTION_KEY]'] = 'option-value';
```
