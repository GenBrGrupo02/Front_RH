import { useEffect, useState } from "react";

function Navbar() {

    const [isdark, setIsdark] = useState<boolean>(() => {
        const savedIsdark = localStorage.getItem("isdark");
        return savedIsdark ? JSON.parse(savedIsdark) : false;
      });
    
      useEffect(() => {
        localStorage.setItem("isdark", JSON.stringify(isdark));
      }, [isdark]);
      
    return (
        <>
            <div className='w-full flex justify-center py-4 text-secondary'>
            
                <div className="container flex justify-between text-lg">
                    Sistema RH

                    <div className='flex gap-4'>
                        <input
                            type="checkbox"
                            checked={isdark}
                            onChange={() => setIsdark(!isdark)}
                            value="business"
                            className="toggle theme-controller"/>
                        Funcionários
                        Sobre Nós
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar