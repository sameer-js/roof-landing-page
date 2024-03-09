import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-wrapper'>
      <section className='h-container flexCenter paddings innerWidth'>
        <img src='./logo.png' alt='logo' width={100} />
        <div className='h-menu flexCenter'>
          <Link href=''>Residencies</Link>
          <Link href=''>Our Services</Link>
          <Link href=''>Get Started</Link>
          <button className='button'>
            <Link href=''>Contact</Link>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
