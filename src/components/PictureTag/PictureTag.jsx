export function PictureTag({ mobile, tablet, desktop, alt, className , mqTablet = "47em", mqDesktop = "79em"}) {
  return (
    <picture>
      <source media={`(min-width: ${mqDesktop})`} srcSet={desktop} />
      <source media={`(min-width: ${mqTablet})`} srcSet={tablet} />
      <img className={className} src={mobile} alt={alt} />
    </picture>
  );
}
