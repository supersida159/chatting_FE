
export default function Privatelayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body >
          {children}
          </body>
      </html>
    )
  }