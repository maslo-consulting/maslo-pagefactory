import { services, cities, getServiceBySlug, getCityBySlug, generateStaticParams as genParams } from '../../../lib/data'
import Link from 'next/link'
import ContactForm from './form'

export async function generateStaticParams() {
  return genParams()
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service)
  const city = getCityBySlug(params.city)
  if (!service || !city) return {}
  return {
    title: `${service.pageTitle} in ${city.name} | Maslo Consulting`,
    description: `${service.description} ${city.name}, ${city.state}. 20+ years HR expertise. ${service.ctaText} today.`,
  }
}

const N = '#0B1F3A'
const G = '#C9A84C'
const W = '#ffffff'
const O = '#F8F6F1'

export default function Page({ params }) {
  const service = getServiceBySlug(params.service)
  const city = getCityBySlug(params.city)
  if (!service || !city) return <div>Not found</div>

  const others = services.filter(s => s.slug !== service.slug).slice(0, 4)
  const nearby = cities.filter(c => c.slug !== city.slug).slice(0, 6)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}/>

      <div style={{background:'#060F1C',padding:'8px 24px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'8px'}}>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.4)'}}>India only HR firm with its own AI product suite</span>
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
          <div style={{fontSize:'11px',color:G,letterSpacing:'0.1em',marginBottom:'12px',textTransform:'uppercase'}}>{service.name} in {city.name}</div>
          <h1 style={{fontFamily:"Georgia,serif",fontSize:'clamp(28px,5vw,52px)',fontWeight:500,color:W,lineHeight:1.15,marginBottom:'16px',maxWidth:'700px'}}>
            {service.pageTitle} in {city.name}
          </h1>
          <p style={{fontSize:'16px',color:'rgba(255,255,255,0.65)',lineHeight:1.8,maxWidth:'580px',marginBottom:'32px'}}>
            {service.description} {city.name}, {city.state}. Maslo Consulting brings 20+ years of HR experience and 5 proprietary AI tools.
          </p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="#contact" style={{background:G,color:N,fontSize:'14px',fontWeight:500,padding:'13px 28px',textDecoration:'none'}}>{service.ctaText}</a>
            <a href="https://wa.me/919989066684" target="_blank" style={{color:W,fontSize:'14px',padding:'13px 28px',textDecoration:'none',border:'0.5px solid rgba(255,255,255,0.25)'}}>WhatsApp us</a>
          </div>
        </div>
      </div>

      <div style={{background:O,padding:'56px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'32px',fontWeight:500,color:N,marginBottom:'32px'}}>Why companies in {city.name} choose Maslo</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'16px'}}>
            {[
              {icon:'20+',title:'Years of HR expertise',body:'Practitioners who have spent careers inside MNCs across India.'},
              {icon:'5',title:'Proprietary AI products',body:'Languapro, ER Studio, Compliance360, Campus Career, AI Interviewer.'},
              {icon:'40+',title:'Companies served',body:'Startups, SMEs, and enterprises across India and globally.'},
              {icon:'100%',title:'End-to-end delivery',body:'We implement, not just advise. Every engagement includes execution.'},
            ].map((item,i) => (
              <div key={i} style={{background:W,border:'0.5px solid #C8C5BC',padding:'24px'}}>
                <div style={{fontSize:'28px',fontWeight:700,color:G,marginBottom:'8px'}}>{item.icon}</div>
                <h3 style={{fontSize:'15px',fontWeight:500,color:N,marginBottom:'8px'}}>{item.title}</h3>
                <p style={{fontSize:'13px',color:'#4A4845',lineHeight:1.7}}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:O,padding:'56px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'32px',fontWeight:500,color:N,marginBottom:'32px'}}>
            Frequently asked questions
          </h2>
          {service.faq.map((item,i) => (
            <div key={i} style={{borderBottom:'0.5px solid #C8C5BC',padding:'20px 0'}}>
              <h3 style={{fontSize:'15px',fontWeight:500,color:N,marginBottom:'10px'}}>{item.q}</h3>
              <p style={{fontSize:'13px',color:'#4A4845',lineHeight:1.8}}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" style={{background:N,padding:'64px 24px'}}>
        <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center'}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:'34px',fontWeight:500,color:W,marginBottom:'16px'}}>Talk to a Maslo specialist in {city.name}</h2>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.6)',marginBottom:'32px'}}>We respond within 2 business hours.</p>
          <ContactForm service={service.name} city={city.name} ctaText={service.ctaText}/>
        </div>
      </div>

      <div style={{background:'#F2F0EB',padding:'40px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',gap:'40px',flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:'200px'}}>
            <h3 style={{fontSize:'12px',fontWeight:500,color:N,marginBottom:'12px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Other services in {city.name}</h3>
            {others.map(s => (
              <div key={s.slug} style={{marginBottom:'6px'}}>
                <Link href={`/${s.slug}/${params.city}`} style={{fontSize:'13px',color:'#4A4845',textDecoration:'none'}}>{s.shortName} in {city.name}</Link>
              </div>
            ))}
          </div>
          <div style={{flex:1,minWidth:'200px'}}>
            <h3 style={{fontSize:'12px',fontWeight:500,color:N,marginBottom:'12px',textTransform:'uppercase',letterSpacing:'0.06em'}}>{service.shortName} in other cities</h3>
            {nearby.map(c => (
              <div key={c.slug} style={{marginBottom:'6px'}}>
                <Link href={`/${params.service}/${c.slug}`} style={{fontSize:'13px',color:'#4A4845',textDecoration:'none'}}>{service.shortName} in {c.name}</Link>
              </div>
            ))}
          </div>
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
