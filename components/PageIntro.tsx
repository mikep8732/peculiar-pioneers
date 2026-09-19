export default function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="ppx-page-intro">
      <div className="ppx-kicker">{kicker}</div>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
