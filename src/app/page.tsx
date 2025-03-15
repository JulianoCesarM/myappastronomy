
export default function Home() {
  return (
    <div className="">
      <header className="p-5 bg-gray-100 flex justify-between">
        <a href="#" className="w-6 min-w-6">
          <img src="/favicon.ico" alt="Home" className="hover:animate-spin" />
        </a>
        <div className="mx-2">
          <ol className="flex justify-center gap-1">
            <li><a className="mx-2 hover:bg-gray-400" href="#">Pesquisas</a></li>
            <li><a className="mx-2" href="#">Documentos</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
            <li><a className="mx-2" href="#">Outros</a></li>
          </ol>
        </div>
        <input className="bg-gray-300  rounded-sm hover:bg-gray-400 focus:outline-none" type="text" placeholder=" Search :)"/>
      </header>
    </div>
  );
}
