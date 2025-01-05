declare const Sidebar: ({ isOpen, isMobile, onClose, }: {
    isOpen: boolean;
    isMobile: boolean;
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
