import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";

export default function Navbar() {
  return (
    <main className=" bg-white fixed w-full ">
      {/* start : content */}
      <div className="navbar bg-black">
        <div className="navbar-start">
          {/* <p className="font-bold text-white ">GPT+Enterprise data|Sample</p> */}
        </div>
        <div className="navbar-center">
          <p className="text-white mr-3">Chat</p>
          <input
            type="text"
            placeholder="Ask a question"
            className="input input-bordered w-full max-w-xs"
          />
          <Image
            src="/github.png"
            alt="Vercel Logo"
            className="bg-white rounded-full ml-3"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="navbar-end">
{/*        
        <p className="text-white">Azure OpenAI + Congntitive Search</p> */}
        </div>
      </div>
      {/* end : content */}
    </main>
  );
}
