export const metadata = {
  metadataBase: new URL('https://pages.masloconsulting.com'),
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"sans-serif",background:"#fff"}}>
        {children}
      </body>
    </html>
  )
}
