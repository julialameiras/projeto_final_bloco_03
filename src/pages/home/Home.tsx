
function Home() {
  return (
    <>
    <div className="bg-green-600 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Bem-vindo à Farmácia Saúde</h1>
          <p className="text-lg mb-8">Seu destino para medicamentos de qualidade e atendimento especializado. Encontre tudo o que você precisa com conforto e segurança.</p>
          <a href="#" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300">Saiba Mais</a>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
           
            {/* Product Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img src="https://d225afdvrjsxie.cloudfront.net/Custom/Content/Products/45/55/45552_polaramine-6mg-com-12-comprimidos_m1_637705016829987035.jpg" alt="Produto 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Polaramine 6Mg Com 12 Comprimidos</h3>
              <p className="text-gray-700 mb-4 flex-grow">Polaramine é um anti-histamínico ou antialérgico com sua ação ou efeito destinado para alergia, com prevenção dos efeitos da histamina, que são substâncias criadas pelo próprio organismo. É indicado para alergia, prurido, rinite alérgica, urticária, picada de inseto, conjuntivite alérgica,dermatite e dermatite atópica (um tipo de inflamação na pele).</p>
              <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Comprar Agora</a>
            </div>
            
            {/* Product Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img src="https://cdn.ultrafarma.com.br/static/produtos/819354/large-637795704440509360-819354.png" alt="Produto 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Soro Fisiológico 500ml Sidney Oliveira</h3>
              <p className="text-gray-700 mb-4 flex-grow">Soro fisiológico 0,9 % 500 ml Sidney Oliveira é indicado para nebulização, lavagens de lentes de contato, ferimentos e hidratação da pele. Recomendações de uso: Para nebulização, lavagens de lentes de contato, lavagem de ferimentos e hidratação da pele.</p>
              <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Comprar Agora</a>
            </div>
            
            {/* Product Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <img src="https://via.placeholder.com/300" alt="Produto 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Produto 3</h3>
              <p className="text-gray-700 mb-4 flex-grow">Descrição detalhada do produto 3 com todas as informações necessárias.</p>
              <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Comprar Agora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">O que nossos clientes dizem</h2>
          <div className="flex flex-wrap justify-center gap-12">
           
            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <p className="text-gray-700 mb-4">“Ótimo atendimento e produtos de alta qualidade! Sempre encontro o que preciso. Recomendo a todos.”</p>
              <p className="font-semibold">Maria Silva</p>
            </div>
           
            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <p className="text-gray-700 mb-4">“A farmácia é muito organizada e os funcionários são sempre atenciosos. Uma experiência de compra muito agradável.”</p>
              <p className="font-semibold">João Pereira</p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Home