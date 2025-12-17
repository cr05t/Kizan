import { Menu, Calculator, Calendar, Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="bg-white dark:bg-[#111111] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-start items-center relative">
          <div className="text-center">
            <h1 className="text-2xl tracking-[0.2em] font-light serif text-[#3E3328] dark:text-white">HIROMA</h1>
            <p className="text-[0.5rem] text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">for new life style</p>
          </div>
          <a
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#3E3328] text-white text-sm tracking-widest hover:bg-opacity-90 transition-colors rounded absolute right-6 top-1/2 -translate-y-1/2"
            href="#"
          >
            <Calendar className="w-4 h-4 mr-2" /> ショールーム予約
          </a>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-white overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            alt="Minimalist wooden kitchen table"
            className="w-full h-full object-cover"
            src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/hero-image-01-pc.webp"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 mt-[-5rem]">
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-0 bg-white dark:bg-[#111111]">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1 pl-6 md:pl-12">
              <h2 className="text-4xl md:text-5xl leading-relaxed serif text-gray-900 dark:text-white">
                シンプルがいい<br />
                コンパクトがいい<br />
                わたしたちに丁度いい
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-loose font-light">
                ミニマルな暮らしを叶える<br />
                新しいコンパクトキッチンのかたち
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                alt="Compact dining table with kitchen integration"
                className="w-full h-auto rounded shadow-sm object-cover aspect-[4/3] md:aspect-[5/4] scale-105 md:scale-110"
                src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/intro-img-sp@2x.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Design Section */}
      <section className="py-24 px-0 bg-[#F9F9F9] dark:bg-[#1F1F1F]">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center md:text-center">
              <h2 className="text-4xl md:text-5xl serif text-gray-900 dark:text-white">
                必要なものを最低限に
              </h2>
              <div className="mx-auto w-16 h-[2px] bg-black"></div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-loose font-light">
                キッチン機能をそぎ落とし<br />
                シンプルを追求したデザイン<br />
                家具のように溶け込むキッチン
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
            <div className="row-span-2 min-h-[260px] md:min-h-[520px]">
                <ImageWithFallback
                  alt="Detailed view of sink integration"
                className="w-full h-auto md:h-full object-cover rounded shadow-sm aspect-[4/3]"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about01-01-pc@2x.webp"
                />
              </div>
            <div className="flex flex-col gap-4 h-full min-h-[260px] md:min-h-[520px]">
                <ImageWithFallback
                  alt="Storage wagon"
                className="w-full h-auto md:flex-1 object-cover rounded shadow-sm aspect-[4/3]"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about01-02-pc@2x.webp"
                />
                <ImageWithFallback
                  alt="Table setting"
                className="w-full h-auto md:flex-1 object-cover rounded shadow-sm aspect-[4/3]"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about01-03-pc@2x.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 px-0 bg-white dark:bg-[#111111]">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                alt="Person arranging flowers on table"
                className="w-full h-auto rounded shadow-sm object-cover md:aspect-[4/3] scale-105 md:scale-110"
                src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about02-01-01-pc@2x.webp"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2 pl-0 md:pl-12 text-center md:text-center">
              <h2 className="text-3xl md:text-4xl serif text-gray-900 dark:text-white">
                料理も趣味もくつろぎも
              </h2>
              <div className="mx-auto w-16 h-[2px] bg-black"></div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-loose font-light">
                料理はもちろん<br />
                趣味を楽しんだりコーヒーを淹れたり<br />
                工夫次第で使い方は無限大
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageWithFallback
              alt="Lifestyle 1"
              className="w-full h-72 object-cover rounded shadow-sm"
              src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about02-02-pc@2x.webp"
            />
            <ImageWithFallback
              alt="Lifestyle 2"
              className="w-full h-72 object-cover rounded shadow-sm"
              src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about02-03-pc@2x.webp"
            />
            <ImageWithFallback
              alt="Lifestyle 3"
              className="w-full h-72 object-cover rounded shadow-sm"
              src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about02-04-pc@2x.webp"
            />
          </div>
        </div>
      </section>

      {/* Lifestyle Stories Section */}
      <section className="py-24 px-0 bg-white">
        <div className="w-full text-center">
          <div className="mx-auto max-w-screen-xl px-4 md:px-10">
            <h2 className="text-4xl md:text-5xl serif text-gray-900 dark:text-white mb-4">
              HIROMAで叶えられるライフスタイル
            </h2>
            <div className="mx-auto w-20 h-[2px] bg-black mb-6"></div>
            <p className="text-gray-500 dark:text-gray-400 mb-16 text-base md:text-lg">あなたのおうち時間をもっと楽しく</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded mb-6">
                  <ImageWithFallback
                    alt="Couple cooking together"
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about03-01-pc@2x.jpg"
                  />
                </div>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  座って、好きなドラマを見ながら料理。<br />
                  以前は「やらなきゃ」と気負ってしていた家事も、ゆとりをもってこなせる。
                </p>
              </div>
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded mb-6">
                  <ImageWithFallback
                    alt="Friends gathering"
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/about03-02-pc@2x.jpg"
                  />
                </div>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  週末は気の置けない友達を招いてホームパーティー。<br />
                  料理をしたり、飲んだり、しゃべったり。<br />
                  みんなが自由に過ごす楽しい夜。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#4A3B32] dark:bg-black text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl md:text-5xl serif mb-4 text-white/90">HIROMA's Gallery</h2>
          <div className="mx-auto w-20 h-[2px] bg-white/90 mb-4"></div>
          <p className="text-white/70 text-base md:text-lg font-light">シンプルなスタイルは<br />どんなインテリアにもマッチ</p>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 md:px-0 md:justify-center">
          <ImageWithFallback
            alt="Gallery 1"
            className="w-[300px] md:w-[600px] h-[300px] md:h-[400px] object-cover rounded transition-opacity duration-300 shrink-0"
            src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/gallery-01-pc@2x.webp"
          />
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-[#423932] dark:bg-[#1a1816] text-white/90">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif mb-2">納入事例</h2>
            <div className="mx-auto w-16 h-[2px] bg-white/80 mb-4"></div>
            <p className="text-white/70 text-sm md:text-base">さまざまなライフスタイルの方々に選ばれています</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-gray-800 rounded shadow-sm overflow-hidden flex flex-col">
                <ImageWithFallback
                  alt="Case study 1"
                  className="w-full h-64 object-cover rounded"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/case-y-01-thumb-pc@2x.webp"
                />
                <div className="flex-1 flex items-center justify-center px-3 py-10">
                  <p className="text-sm text-center leading-relaxed">ヴィラのようなリラックス空間を、日常に</p>
                </div>
              </div>
              <div className="bg-white text-gray-800 rounded shadow-sm overflow-hidden flex flex-col">
                <ImageWithFallback
                  alt="Case study 2"
                  className="w-full h-64 object-cover rounded"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/case-y-02-thumb-pc@2x.webp"
                />
                <div className="flex-1 flex items-center justify-center px-3 py-10">
                  <p className="text-sm text-center leading-relaxed">キッチンの壁をなくして、空間を広々と</p>
                </div>
              </div>
              <div className="bg-white text-gray-800 rounded shadow-sm overflow-hidden flex flex-col">
                <ImageWithFallback
                  alt="Case study 3"
                  className="w-full h-64 object-cover rounded"
                  src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/case-y-03-thumb-pc@2x.webp"
                />
                <div className="flex-1 flex items-center justify-center px-3 py-10">
                  <p className="text-sm text-center leading-relaxed">非日常が味わえる、セカンドハウス</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-[#111111]">
        <div className="container mx-auto w-full max-w-screen-xl px-6 md:px-12">
          <div className="text-center mb-24 space-y-3">
            <h2 className="text-3xl md:text-4xl serif text-gray-900 dark:text-white mb-2">HIROMAの特徴</h2>
            <div className="mx-auto w-16 h-[2px] bg-black"></div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">HIROMAのたくさんのこだわりをご紹介します</p>
          </div>

          {/* Feature 01 */}
          <div className="flex flex-col md:flex-row gap-12 mb-32 pb-16">
            <div className="md:w-1/3 relative pr-10 md:pr-16">
              <div className="sticky top-24 text-center">
                <span className="text-5xl font-light text-black block mb-2 serif">01</span>
                <h3 className="text-2xl md:text-3xl serif text-black">圧倒的シンプルさ</h3>
                <p className="text-base text-black mt-4 leading-relaxed">
                  シンプルなデザインの<br />
                  コンパクトキッチンだから、<br />
                  キッチンの存在感を和らげます。
                </p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-20">
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] p-0 rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Simple Design"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-01-01-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">THE シンプルなデザイン</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  キッチン機能をそぎ落とし、シンプルを追求したデザインは、様々なタイプの空間にマッチします。脚付き家具と同じ構造にすることで抜け感を演出します。
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] p-0 rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Functionality"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-01-02-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">料理したいときだけキッチンの機能が拡張</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  必要最低限のキッチン機能でも、テーブルまで作業面として使えば、シンク中段やシンク上を活用すれば、おうち料理を楽しめます。
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] p-0 rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Storage Wagon"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-01-03-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">必要なものだけを収納するワゴン</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  収納は、コンパクトかつ使い勝手を意識したワゴンタイプ。よく使うお気に入りのものだけを収納すれば、どこでも自分の空間を作れます。
                </p>
              </div>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col md:flex-row gap-12 mb-32 pb-16">
            <div className="md:w-1/3 relative pr-10 md:pr-16">
              <div className="sticky top-24 text-center">
                <span className="text-5xl font-light text-black block mb-2 serif">02</span>
                <h3 className="text-2xl md:text-3xl serif text-black">
                  ダイニング一体型で<br />暮らしをもっと自由に
                </h3>
                <p className="text-base text-black mt-4 leading-relaxed">
                  キッチンとダイニングが一体として。<br />
                  フレキシブルに組み合わせられるため、<br />
                  様々なシーンに対応できます。
                </p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-20">
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] p-0 rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Integrated Layout"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-02-01-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">キッチンは料理だけじゃない</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  HIROMAのキッチンは、料理をしないときも生活の一部としてデザインしました。料理しないときは、仕事をしたり趣味を楽しんだり。使い方は無限大。生活感が出やすいシンクもトッププレートで隠すことができます。
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] p-0 rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Free Layout"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-02-02-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">ダイニングテーブルのレイアウトも自由自在</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  キッチンテーブルとダイニングテーブルの高さは710mmに統一。配置の自由度があるキッチンテーブルは固定ですが、ダイニングの配置は使い方に合わせてL型、I型、独立型に移動できます。
                </p>
              </div>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="flex flex-col md:flex-row gap-12 mb-32 pb-16">
            <div className="md:w-1/3 relative pr-10 md:pr-16">
              <div className="sticky top-24 text-center">
                <span className="text-5xl font-light text-black block mb-2 serif">03</span>
                <h3 className="text-2xl md:text-3xl serif text-black">
                  スタイルに合わせて選べる<br />3つのタイプ
                </h3>
                <p className="text-base text-black mt-4 leading-relaxed">
                  素材やサイズ、高さが異なる<br />
                  3つのタイプをご用意。
                </p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Standard Type"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-03-01-pc.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">01 スタンダードタイプ</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">深さ・大きさとも十分なサイズの人工大理石シンクが特徴で、専用オプションを活用すればフレキシブルに使うことができます。2口IHや食器洗い乾燥機を選択できる幅の広い機種もあります。                  
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Compact Type"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-03-02-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">02 コンパクトタイプ</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">900mmのワークトップに、小さめのステンレスシンクと1口IHの組み合わせ。キッチンの機能がコンパクトにまとまり、ミニマムに暮らしたい方やサブキッチンにおすすめです。</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Low Type"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-03-03-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">03 ロータイプ</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">ワークトップの高さがダイニングテーブルと同じ高さ(713mm)のため座ったまま作業でき、キッチンからダイニングまでフラットに使うことができます。</p>
              </div>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3 relative pr-10 md:pr-16">
              <div className="sticky top-24 text-center">
                <span className="text-5xl font-light text-black block mb-2 serif">04</span>
                <h3 className="text-2xl md:text-3xl serif text-black">
                  天然木のぬくもりで<br />リラックス空間を演出
                </h3>
                <p className="text-base text-black mt-4 leading-relaxed">
                  木の風合いが美しく、<br />
                  ディテールまで手の行き届いたデザイン設計。<br />
                  インテリアとして空間に馴染み、<br />
                  リラックスムードを演出します。
                </p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-12">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Wood Texture"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-04-01-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">本格家具と同じ天然木(ホワイトオーク)を使用</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">本格家具にも使われている天然木をキッチン、ダイニングテーブルに使用。木の様々な表情や色合いの変化を楽しめます。</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Craftsman"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-04-02-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">職人たちが手作業でひとつひとつ製作</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">キッチンテーブル・ダイニングテーブルの木工部分は、“ 木工の町”と言われる飛騨高山の工場で製作します。木の温もりと職人たちの技を感じていただけます。</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#1F1F1F] rounded overflow-hidden min-h-[280px]">
                  <ImageWithFallback
                    alt="Chair Detail"
                    className="w-full h-full object-cover"
                    src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/feature-04-03-pc@2x.webp"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-800 dark:text-white">素材・カラーを合わせたチェアもご用意</h4>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">キッチンテーブル・ダイニングテーブルと素材・カラーを合わせたチェアもご用意。体をやさしくサポートするデザインでリラックス感を高めます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation CTA Section */}
      <section className="bg-gray-100 dark:bg-[#1F1F1F] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ImageWithFallback
              alt="Interior Simulation"
              className="w-full h-full min-h-[420px] object-cover rounded"
              src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/plan-pc@2x.webp"
            />
          </div>
          <div className="p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl serif text-gray-800 dark:text-white mb-4">WEBで希望のHIROMAを<br />簡単にプランニングできます</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              HIROMAは、WEBで簡単にプランをシミュレーションできます。ご<br />希望の仕様の商品代やプランニングシートをご確認いただけま<br />す。
            </p>
            <p className="text-xs text-black text-left mb-4">
              ※掲載情報は、予告なく変更または更新する場合があります。
            </p>
            <div>
              <a className="inline-flex items-center px-8 py-4 bg-[#3E3328] text-white text-sm tracking-widest hover:bg-opacity-90 transition-colors rounded" href="#">
                <Calculator className="w-4 h-4 mr-3" /> プランシミュレーションをする
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom CTA Section */}
      <section className="bg-white dark:bg-[#111111] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="order-2 md:order-2 p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl serif text-gray-800 dark:text-white mb-4">ショールームで<br />HIROMAの魅力を体感しよう</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              ショールームでは、専門のアドバイザーがご案内いたします。<br />お近くのショールームにお越しの上、実際に見て、触れて、<br />HIROMAの魅力をご体感ください。
            </p>
            <div>
              <a className="inline-flex items-center px-8 py-4 bg-[#3E3328] text-white text-sm tracking-widest hover:bg-opacity-90 transition-colors rounded" href="#">
                <Calendar className="w-4 h-4 mr-3" /> ショールームに実物を見に行く
              </a>
            </div>
          </div>
          <div className="order-1 md:order-1 p-0">
            <ImageWithFallback
              alt="Showroom"
              className="w-full h-full min-h-[420px] object-cover object-left rounded"
              src="https://cleanup.jp/kitchen/hiroma/campaign_20241114_1/assets/images/showroom-pc@2x.webp"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#111111] py-16 border-t border-black dark:border-black">
        <div className="container mx-auto text-center px-6">
          <div className="flex justify-center space-x-6 mb-8">
            <a className="text-black hover:text-[#3E3328] transition-colors" href="#">
              <Instagram className="w-6 h-6" />
            </a>
            <a className="text-black hover:text-[#3E3328] transition-colors" href="#">
              <Facebook className="w-6 h-6" />
            </a>
            <a className="text-black hover:text-[#3E3328] transition-colors" href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
          <div className="mb-4">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl tracking-[0.2em] font-light serif text-[#3E3328] dark:text-white inline-block pb-1">HIROMA</h2>
              <span className="text-[0.55rem] text-[#3E3328]">for new life style</span>
            </div>
          </div>
          <p className="text-[0.6rem] text-gray-400 uppercase tracking-wider mt-8">© HIROMA Corporation. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
