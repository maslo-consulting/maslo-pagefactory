import { services, cities } from '../lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'HR Compliance, Recruitment & Consulting Services Across India | Maslo Consulting',
  description: 'Maslo Consulting delivers POSH compliance, labour law compliance, IT recruitment, learning & development, and HR consulting in 24 cities across India — backed by 20+ years of practitioner expertise and 4 proprietary AI tools.',
}

const N = '#0B1F3A'
const G = '#C9A84C'
const W = '#ffffff'
const O = '#F8F6F1'

export default function Home() {
  return (
    <>
      <div style={{background:'#060F1C',padding:'8px 24px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'8px'}}>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.4)'}}>India&rsquo;s only HR firm with its own AI product suite</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href="mailto:hr@masloconsulting.com" style={{fontSize:'11px',color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>hr@masloconsulting.com</a>
          <a href="tel:+919989066684" style={{fontSize:'11px',color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>+91 99890 66684</a>
        </div>
      </div>

      <nav style={{background:'rgba(11,31,58,0.97)',padding:'0 24px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100}}>
        <a href="https://masloconsulting.com" style={{fontFamily:"Georgia,serif",fontSize:'22px',fontWeight:500,color:W,textDecoration:'none'}}>
          Maslo <span style={{color:G}}>Consulting</span>
        </a>
        <a href="tel:+919989066684" style={{background:G,color:N,fontSize:'12px',fontWeight:500,padding:'8px 18px',textDecoration:'none'}}>Call us</a>
      </nav>

      <div style={{background:N,padding:'72px 24px 56px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{fontSize:'11px',color:G,letterSpacing:'0.1em',marginBottom:'12px',textTransform:'uppercase'}}>Pan-India HR Services</div>
          <h1 style={{fontFamily:"Georgia,serif",fontSize:'clamp(28px,5vw,52px)',fontWeight:500,color:W,lineHeight:1.15,marginBottom:'16px',maxWidth:'760px'}}>
            HR Compliance, Recruitment &amp; Consulting — Wherever You Operate in India
          </h1>
          <p style={{fontSize:'16px',color:'rgba(255,255,255,0.65)',lineHeight:1.8,maxWidth:'620px',marginBottom:'8px'}}>
            Maslo Consulting delivers POSH compliance, labour law compliance, IT recruitment, learning &amp; development, and HR consulting across 24 Indian cities — backed by 20+ years of practitioner expertise and 4 proprietary AI tools.
          </p>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.5)'}}>
            Pick your service and city below, or visit <a href="https://masloconsulting.com" style={{color:G}}>masloconsulting.com</a> for the full picture of what we do.
          </p>
        </div>
      </div>

      <div style={{background:O,padding:'56px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'28px',fontWeight:500,color:N,marginBottom:'8px'}}>Browse by service</h2>
          <p style={{fontSize:'13px',color:'#4A4845',marginBottom:'28px'}}>Each service page is tailored to your city — statutory rates, local context, and a direct line to a Maslo specialist.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'16px'}}>
            {services.map(service => (
              <div key={service.slug} style={{background:W,border:'0.5px solid #C8C5BC',padding:'24px'}}>
                <h3 style={{fontSize:'16px',fontWeight:500,color:N,marginBottom:'10px'}}>{service.name}</h3>
                <p style={{fontSize:'13px',color:'#4A4845',lineHeight:1.7,marginBottom:'14px'}}>{service.description} your city.</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                  {cities.slice(0,6).map(city => (
                    <Link key={city.slug} href={`/${service.slug}/${city.slug}`} style={{fontSize:'11px',color:G,textDecoration:'none',border:'0.5px solid rgba(201,168,76,0.4)',padding:'4px 8px'}}>{city.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:W,padding:'56px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'28px',fontWeight:500,color:N,marginBottom:'8px'}}>Browse by city</h2>
          <p style={{fontSize:'13px',color:'#4A4845',marginBottom:'28px'}}>All 5 services, in all 24 cities we serve.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px'}}>
            {cities.map(city => (
              <div key={city.slug}>
                <h3 style={{fontSize:'13px',fontWeight:500,color:N,marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.04em'}}>{city.name}</h3>
                {services.map(service => (
                  <div key={service.slug} style={{marginBottom:'4px'}}>
                    <Link href={`/${service.slug}/${city.slug}`} style={{fontSize:'12px',color:'#4A4845',textDecoration:'none'}}>{service.shortName}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" style={{background:N,padding:'64px 24px'}}>
        <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'34px',fontWeight:500,color:W,marginBottom:'16px'}}>Talk to a Maslo specialist</h2>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.6)',marginBottom:'32px'}}>We respond within 2 business hours, wherever you're based.</p>
          <a href="tel:+919989066684" style={{background:G,color:N,fontSize:'14px',fontWeight:500,padding:'13px 28px',textDecoration:'none',marginRight:'12px'}}>Call +91 99890 66684</a>
          <a href="https://masloconsulting.com" style={{color:W,fontSize:'14px',padding:'13px 28px',textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.25)'}}>Visit masloconsulting.com</a>
        </div>
      </div>

      <footer style={{background:'#060F1C',padding:'24px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
        <span style={{fontFamily:"Georgia,serif",fontSize:'18px',color:W}}>Maslo <span style={{color:G}}>Consulting</span></span>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.35)'}}>2026 Maslo Consulting Pvt Ltd</span>
        <a href="https://masloconsulting.com" style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>masloconsulting.com</a>
      </footer>

      <a href="https://wa.me/919989066684" target="_blank" style={{position:'fixed',bottom:'24px',right:'24px',width:'52px',height:'52px',background:'#25D366',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:999,textDecoration:'none'}}>
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
