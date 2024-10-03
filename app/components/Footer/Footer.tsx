import HomeIcon from '@/app/utils/icons/HomeIcon'
import Link from 'next/link'

const Footer = () => {
  return (
    <section>
        <form action={''}>
            <h6 className='footer-title'>Newsletter</h6>
            <fieldset className='form-control max-w-80 pb-6'>
                <label className='label' htmlFor='email-input'>
                    <span className='label-text text-lg'>
                        Subscribe to our Newsletter here.
                    </span>
                </label>
                <div className="join">
                    <input 
                        type='email'
                        id='email-input'
                        placeholder='username@email.com'
                        className='input input-bordered input-accent join-item'
                    />
                    <button className="btn btn-accent join-item">Subscribe</button>
                </div>
            </fieldset>
        </form>
        <nav className='grid grid-flow-row gap-4 pb-6'>
            <h6 className='footer-title'>Site Links</h6>
            <Link href="" className='link link-hover'>Home</Link>
            <Link href="" className='link link-hover'>Portfolio</Link>
            <Link href="" className='link link-hover'>About us</Link>
            <Link href="" className='link link-hover'>Contact</Link>
        </nav>
        <nav>
            <h6 className='footer-title'>Social</h6>
            <div className='grid grid-flow-col gap-4'>
                <Link href="" className='link link-hover'><HomeIcon /></Link>
                <Link href="" className='link link-hover'><HomeIcon /></Link>
                <Link href="" className='link link-hover'><HomeIcon /></Link>
                <Link href="" className='link link-hover'><HomeIcon /></Link>
                <Link href="" className='link link-hover'><HomeIcon /></Link>
            </div>
        </nav>
        <div className='divider min-w-96'></div>
        <aside>
            <p className='text-xs'>
                Copyright &copy;{ new Date().getFullYear() } &nbsp;
                <span className='text-accent font-light text-base'>Oseelabs</span>
                <span className='divider-horizontal text-neutral'>|</span>
                All rights reserved
            </p>
        </aside>
    </section>
  )
}

export default Footer