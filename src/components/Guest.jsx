"use client";
import { useEffect } from "react";
import { checkSession } from "@/app/supabase";
import { useState } from "react";

export default function Guest(props) {
  const [logged, setLogged] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await checkSession();
      if (data.data.session !== null) {
        setLogged(null);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return logged === null ? (
    !logged ? (
      !loading ? (
        window.history.back()
      ) : (
        <html>
          <head></head>
          <body></body>
        </html>
      )
    ) : !loading ? (
      window.history.back()
    ) : (
      props.children
    )
  ) : (
    props.children
  );
}
