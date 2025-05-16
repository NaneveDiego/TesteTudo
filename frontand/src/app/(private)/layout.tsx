export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <h1>private</h1>
         {children}
       </div> 


  );
}
