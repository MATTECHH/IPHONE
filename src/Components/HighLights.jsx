
const HighLights = () => {



    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Desigin revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor expêriencia</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">

                    <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                        <img src="/Img/titanium-design.jpg" alt="iPhones" loading="lazy" className="w-full rounded-2xl mb-4"/>
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial.O smarphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                        <img src="/Img/ios-features.jpg" alt="Phones" loading="lazy" className="w-full rounded-2xl mb-4"/>
                        <h3 className="font-bold mb-2 text-3xl">iOs 26</h3>
                        <p className="text-gray-300">Desenvolvido para o sistema operacional iOs 26.O sistema mais rápido e poderoso.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl mb-16 p-12 col-span-2">
                        <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                        <p className="text-gray-300 mb-6">O chip mais poderoso do mundo A18 Pro.</p>
                        <img className="w-full rounded-2xl mb-4" src="/Img/chip-a18-pro.jpg" alt="chip" loading="lazy"/>

                        <ul className="space-y-3 text-gray-300">
                            <li className="">CPU 20% mais rápida</li>
                            <li>GPU 25% mais eficiente</li>
                            <li>Neural Engine com 16 núcleos</li>
                            <li>Ray tracing acelerado por hardware</li>
                        </ul>
                    </div>

                </div>
                
                <div className="text-center" id="camera">
                    <h1 className="text-4xl font-bold mb-10 ">Sistema de câmera Pro avançado</h1>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco auttomático</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão de 120 com modo noturno</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HighLights