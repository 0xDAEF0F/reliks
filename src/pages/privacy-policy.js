import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'

function PrivacyPolicy() {
  return (
    <div className='mx-auto max-w-5xl'>
      <div className='mx-7 flex flex-col gap-5'>
        <div className='mt-5 flex justify-center'>
          <Logo />
        </div>
        <div>
          <div className='mt-24 mb-10'>
            <h1 className='text-4xl text-darkMode-violet11'>Privacy Policy</h1>
          </div>
          <div className='space-y-2 text-justify'>
            <p>
              At Reliks, accessible from www.reliks.xyz, one of our main priorities is the
              privacy of our visitors. This Privacy Policy document contains types of
              information that is collected and recorded by Reliks and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our
              Privacy Policy, do not hesitate to contact us.
            </p>
          </div>
        </div>
        <div className='text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>Log Files</h2>
          <p>
            Reliks follows a standard procedure of using log files. These files log
            visitors when they visit websites. All hosting companies do this and a part of
            hosting services' analytics. The information collected by log files include
            internet protocol (IP) addresses, browser type, Internet Service Provider
            (ISP), date and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing trends,
            administering the site, tracking users' movement on the website, and gathering
            demographic information. Our Privacy Policy was created with the help of the{' '}
            <a href='https://www.privacypolicygenerator.org'>Privacy Policy Generator</a>.
          </p>
        </div>
        <div className='text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>
            Privacy Policies
          </h2>
          <div className='space-y-2'>
            <p>
              You may consult this list to find the Privacy Policy for each of the
              advertising partners of Reliks.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies,
              JavaScript, or Web Beacons that are used in their respective advertisements
              and links that appear on Reliks, which are sent directly to users' browser.
              They automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their advertising
              campaigns and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p>
              Note that Reliks has no access to or control over these cookies that are
              used by third-party advertisers.
            </p>
          </div>
        </div>
        <div className='text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>
            Third Party Privacy Policies
          </h2>
          <div className='space-y-2'>
            <p>
              Reliks's Privacy Policy does not apply to other advertisers or websites.
              Thus, we are advising you to consult the respective Privacy Policies of
              these third-party ad servers for more detailed information. It may include
              their practices and instructions about how to opt-out of certain options.{' '}
            </p>
            <p>
              You can choose to disable cookies through your individual browser options.
              To know more detailed information about cookie management with specific web
              browsers, it can be found at the browsers' respective websites.
            </p>
          </div>
        </div>
        <div className='text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>
            Children's Information
          </h2>
          <div className='space-y-2'>
            <p>
              Another part of our priority is adding protection for children while using
              the internet. We encourage parents and guardians to observe, participate in,
              and/or monitor and guide their online activity.
            </p>
            <p>
              Reliks does not knowingly collect any Personal Identifiable Information from
              children under the age of 13. If you think that your child provided this
              kind of information on our website, we strongly encourage you to contact us
              immediately and we will do our best efforts to promptly remove such
              information from our records.
            </p>
          </div>
        </div>
        <div className='text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>
            Online Privacy Policy Only
          </h2>
          <p>
            This Privacy Policy applies only to our online activities and is valid for
            visitors to our website with regards to the information that they shared
            and/or collect in Reliks. This policy is not applicable to any information
            collected offline or via channels other than this website.
          </p>
        </div>
        <div className='mb-10 text-justify'>
          <h2 className='mb-5 text-xl font-bold text-darkMode-violet10'>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to
            its Terms and Conditions.
          </p>
        </div>
      </div>
      <div className='mb-5 flex justify-center'>
        <Link href='/'>
          <a>
            <Image src='/logosm.png' width={20} height={50} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PrivacyPolicy
