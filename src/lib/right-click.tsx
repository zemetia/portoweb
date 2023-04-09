import { useEffect, useState } from 'react';

export default function RightClick() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  function handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    // console.log(document.activeElement); dapatkan element active terakhir kali sebelum klik kanan, berguna untuk ganti context menu untuk file
    setShowMenu(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  }

  function handleMenuClick() {
    setShowMenu(false);
  }

  function handleBlur() {
    setShowMenu(false);
  }

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      {showMenu && (
        <div
          onBlur={handleBlur}
          ref={(input) => {
            input?.focus();
          }}
          tabIndex={0}
          className='fixed z-50 flex flex-col gap-1 min-w-[17rem] bg-slate-200 border border-gray-300 shadow-lg rounded-lg p-1'
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm text-gray-800 rounded-md hover:bg-gray-300/60 cursor-pointer'
          >
            Menu item 1
          </div>
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm text-gray-800 rounded-md hover:bg-gray-300/60 cursor-pointer'
          >
            Menu item 2
          </div>
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm text-gray-800 rounded-md hover:bg-gray-300/60 cursor-pointer'
          >
            Menu item 3
          </div>
        </div>
      )}
    </>
  );
}
