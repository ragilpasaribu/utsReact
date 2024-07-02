export default function Contact(){
    const diri = [
        {
            nama:"Ragil Sadewa Pasaribu",
            TTGL:"Sibolga,09-03-2004",
            pelatihan:"React",
            Instruktur:"Arya Sefara"
        }
    ]
    return(
        <div className="bg-teal-50 w-96 h-80 flex justify-center m-auto font-bold">
            {diri.map((item)=>{
                <div className="flex justify-center">
                    <span>{item.nama}</span>
                    <span>{item.TTGL}</span>
                    <span>{item.pelatihan}</span>
                    <span>{item.Instruktur}</span>
                </div>
                
            })}
            
        </div>
    )
}