import CarDialog from './CarDialog';
interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <CarDialog />
            {children}
        </>
    );
};

export default Layout;
