<label>
    <input type="checkbox" id="theme-switch" />
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="light-theme-icon">
		<title>Switch to light mode</title>
		<path d="M338.5-338.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
	</svg>
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="dark-theme-icon">
		<title>Switch to dark mode</title>
		<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
	</svg>
</label>

<!-- Thanks to @maarten: -->
<!-- https://github.com/MaartentePoele/your-tribe-for-life-profile-card/blob/main/src/lib/components/ThemeSwitch.svelte -->
<style>

    label {
        position: absolute;
        cursor: pointer;
        top: 1em;
        right: 4em;
        z-index: 1;

        input {
            display: none;
        }

        @media (pointer: fine) {
            &:hover {
                scale: 1.2;
                transition: 0.1s;

                filter: sepia(100);
            }
        }

        &:active, &:focus {
            scale: 1.2;
            outline: 1px solid blue;
        }
    }

    @media (prefers-color-scheme: light) {
        
        .light-theme-icon {
            display: none;
        }

        .dark-theme-icon {
            display: block;
        }

        :global(html) {
            --icon-filter: none;
        }

        :global(html:has(#theme-switch:checked)) {
            color-scheme: dark;
            --icon-filter: invert(1) hue-rotate(180deg);

            .light-theme-icon {
                display: block;
                fill: white;
            }

            .dark-theme-icon {
                display: none;
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        .light-theme-icon {
            display: block;
            fill: white;
        }

        .dark-theme-icon {
            display: none;
        }

        :global(html) {
            --icon-filter: invert(1) hue-rotate(180deg);
        }

        :global(html:has(#theme-switch:checked)) {
            color-scheme: light;
            --icon-filter: none;

            .light-theme-icon {
                display: none;
            }

            .dark-theme-icon {
                display: block;
            }
        }
    }
</style>
