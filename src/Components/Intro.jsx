
const Intro = () => {

    const specs = [
        {id: 1, value: "6.3", label: "Display Super Retina XDR", color:"text-blue-600"},
        {id: 2, value: "A18 Pro", label: "Chip mais rápido", color:"text-orange-500"},
        {id: 3, value: "48MP", label: "Sistema de câmera", color:"text-blue-600"},
        {id: 4, value: "29h", label: "Bateria", color:"text-orange-500"},
    ];


    return (
        <section className="bg-black py-20 px-6">

            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
                <p className="text-2xl md:text-4xl mb-4 text-gradient">Titânio. Tão forte. Tão leve. Tão Pro.</p>
                <p className="text-lg md:text-xl text-gray-00 mb-10 max-w-3xl mx-auto">O designin mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. SIstema de câmera Pro revolucionaria</p>
            </div>


            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-700/50 cursor-pointer">Comprar Agora</button>
                <button className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/50 cursor-pointer">Saiba Mais</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
                {specs.map((spec) => (
                    <div key={spec.id} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <p className={`text-3xl font-bold mb-2 ${spec.color}`}>{spec.value}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Intro