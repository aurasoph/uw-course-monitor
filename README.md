# UW Course Monitor

## Overview
**UW Course Monitor** is a Tampermonkey userscript that automatically refreshes a University of Washington course status page and checks for availability. If the course is open, the script will open the registration page in a new tab.

## Installation
### Step 1: Install Tampermonkey
1. Install the Tampermonkey browser extension if you haven't already:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089?mt=12)

### Step 2: Add the Script
1. Open Tampermonkey.
2. Click on **Create a new script**.
3. Copy and paste the `uw-course-monitor` script into the editor.
4. Save the script.

## Usage
1. Go to the **University of Washington course status page** for your specific course:
   ```
   https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?
   ```
2. The script will automatically start checking the course enrollment status.
3. If the course status is NOT **Closed**, it will open the **registration page** in a new tab.
4. The page will refresh every so often based on a provided time (CHECK_INTERVAL)

## Configuration
You can modify the following settings in the script:
- `CHECK_INTERVAL` – Change the refresh interval (default: 10,000 ms = 10 seconds).
- `TARGET_URL` – Set the **registration URL** (replace with the actual UW registration submission link. This is the link for what you click when you "Send to Registration).

## Disclaimer
This script is intended for **educational purposes only**. Use at your own risk. The University of Washington may update their system, which could cause this script to stop functioning correctly.