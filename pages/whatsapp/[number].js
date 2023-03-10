import { useEffect } from "react";
import { useRouter } from "next/router";

function WhatsappPage() {
  const router = useRouter();
  const { number } = router.query;

  useEffect(() => {
    if (number) {
      const whatsappLink = `https://wa.me/${number}`;
      window.location.href = whatsappLink;
    }
  }, [number]);

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11109257615"
      >
        {" "}
      </script>
      <script>
        window.dataLayer = window.dataLayer | | [ ] ; function gtag ( ){" "}
        {dataLayer.push(arguments)}
        gtag ('js' , new Date ( ) ) ; gtag ('config', 'AW-11109257615') ;
      </script>
    </>
  );
}

export default WhatsappPage;
