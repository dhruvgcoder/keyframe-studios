import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalEmbed: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": { "branding": { "brandColor": "#3B82F6" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-[700px] w-full">
      <Cal
        calLink="dhruv-g-ojlkqk/30min"
        style={{ width: "100%", height: "700px", overflow: "hidden" }}
        config={{ 
          layout: 'month_view',
          theme: 'light'
        }}
      />
    </div>
  );
};

export default CalEmbed;
