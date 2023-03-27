import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
       <Link href={"/"}><div>My Blog</div></Link>
      <ul>
        <Link href={"/about"}>
          <li>About Us</li>
        </Link>
        <Link href={"/blogs"}>
          <li>Blogs</li>
        </Link>
      </ul>
    </nav>
  );
}
