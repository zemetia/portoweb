import { useEffect, useState } from 'react';

export default function RightClick() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  function handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    setShowMenu(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  }

  function handleMenuClick() {
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
          className='fixed z-50 flex flex-col bg-white border border-gray-300 shadow-lg'
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer'
          >
            Menu item 1
          </div>
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer'
          >
            Menu item 2
          </div>
          <div
            onClick={handleMenuClick}
            className='py-1 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer'
          >
            Menu item 3
          </div>
        </div>
      )}
    </>
  );
}
