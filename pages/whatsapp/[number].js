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

  return null;
}

export default WhatsappPage;
