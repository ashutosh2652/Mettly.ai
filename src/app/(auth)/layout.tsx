interface Props{
    children:React.ReactNode;
};

const Layout=({children}:Props)=>{
    return (
        <div className="flex items-center justify-center p-6 md:p-10 bg-muted min-h-svh" >
            <div className="w-full max-w-sm md:max-w-3xl">
                {children}
            </div>
        </div>
    )
}
export default Layout;