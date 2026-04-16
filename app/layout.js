export const metadata = {
  metadataBase: new URL('https://pages.masloconsulting.com'),
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RXZHF809PJ"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RXZHF809PJ');
        `}}/>
      </head>
      <body style={{margin:0,fontFamily:"sans-serif",background:"#fff"}}>
        {children}
      </body>
    </html>
  )
}
