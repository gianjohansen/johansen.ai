import React from 'react'

/*
 * Page fade in animation will leave an empty screen if javascript is disabled.
 * For those users we override all styles with the final state of the animation.
 * 
 * We also need to convert the blog section into a single-column layout.
 */
const NoScript: React.FC<{}> = () => {
  return (
    <noscript>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              opacity: 1 !important;
            }

            html, body {
              cursor: default;
            }

            .jobYearsVisibleShow {
              opacity: 1;
            }

            .horizontal-wrapper {
              width: 100% !important;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .horizontal-wrapper > div {
              display: block !important;
              float: none !important;
              width: 50vw;
              margin: 0 0 20px;
              height: auto;
            }
          `
        }}
      />
    </noscript>
  )
}

export default NoScript;
