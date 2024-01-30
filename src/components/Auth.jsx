"use client";
import { useEffect } from "react";
import { checkSession } from "@/app/supabase";
import { useState } from "react";

export default function Auth(props) {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await checkSession();
      if (data.data.session !== null) {
        setLogged(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return !logged ? (
    !loading ? (
      window.location.replace("/login")
    ) : (
      <html>
        <head></head>
        <body></body>
      </html>
    )
  ) : (
    props.children
  );
}
