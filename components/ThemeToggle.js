import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // For Heroicons v2

function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark'); // Toggle theme
    };

    return (
        <div className="flex items-center">
            <SunIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'}`} />
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeChange} className="sr-only" />
                <div className="toggle-bg w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                <div className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-1'}`}></div>
            </label>
            <MoonIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
    );
}

export default ThemeSwitch;
