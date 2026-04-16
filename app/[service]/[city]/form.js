'use client'
import { useState } from 'react'

const N = '#0B1F3A'
const G = '#C9A84C'
const W = '#ffffff'

export default function ContactForm({ service, city, ctaText }) {
  const [done, setDone] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const r = await fetch('https://formspree.io/f/xrerbnyv', {
      method: 'POST', body: data, headers: { Accept: 'application/json' }
    })
    if (r.ok) setDone(true)
  }

  if (done) return (
    <p style={{color:G,fontSize:'18px',padding:'24px'}}>
      Thank you. We will contact you within 2 business hours.
    </p>
  )

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'12px',textAlign:'left'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
        <input name="name" placeholder="Your name" required style={{background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(201,168,76,0.2)',color:W,fontSize:'13px',padding:'12px',outline:'none',fontFamily:'inherit'}}/>
        <input name="phone" placeholder="Phone number" required style={{background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(201,168,76,0.2)',color:W,fontSize:'13px',padding:'12px',outline:'none',fontFamily:'inherit'}}/>
      </div>
      <input name="email" type="email" placeholder="Work email" required style={{background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(201,168,76,0.2)',color:W,fontSize:'13px',padding:'12px',outline:'none',fontFamily:'inherit'}}/>
      <input name="company" placeholder="Company name" style={{background:'rgba(255,255,255,0.06)',border:'0.5px solid rgba(201,168,76,0.2)',color:W,fontSize:'13px',padding:'12px',outline:'none',fontFamily:'inherit'}}/>
      <input type="hidden" name="service" value={service}/>
      <input type="hidden" name="city" value={city}/>
      <button type="submit" style={{background:G,color:N,fontSize:'14px',fontWeight:500,padding:'14px',border:'none',cursor:'pointer'}}>
        {ctaText}
      </button>
    </form>
  )
}
