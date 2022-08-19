import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '@components/Layout'
import StaticOutro from '@components/StaticOutro'
import LinkStaticPosition from '@components/NoScrollLink'

const PinephoneProWontCharge: NextPage = () => {
  return (
    <Layout title="What to do when your Pinephone Pro won't charge or turn on">
      <div className={`${styles.blogContainer} blog-container`}>
        <Container>
          <Row justify="center">
            <Col xl={8}>
              <div className={styles.blogCategories}>
                <div className={styles.blogCategory}>Mobile</div>
                <div className={styles.blogCategory}>Guide</div>
              </div>
              <h1 className={styles.genericHeading}>
                What to do when your Pinephone Pro won't charge or turn on
              </h1>
              <p>
                Possible fixes for a common issue faced by Pinephone Pro users.
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <img
                className={styles.blogHero}
                src="/images/blog-2-c.jpg"
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <p>
                Daily driving the Pinephone Pro has been relatively pain-free, a nice surprise that I didn't expect. I run into minor issues every now and then but nothing that can't be worked around, usually with a reboot. In saying that, I can't recommend it as anything other than a tinkerer's device right now for one simple reason: the drained phone charging issue.
              </p>
              <h2 className={styles.genericHeading}>The problem</h2>
              <p>
                It's very easy to let your phone drop to zero battery while you're out and about. Maybe you forgot to charge it the night before, maybe you're watching long videos on your commute, etc. The issue is that when a Pinephone Pro's battery drains to zero it can no longer be charged by simply plugging it in. The phone will just sit there like a brick, no matter how long you leave it to charge.
              </p>
              <p>
                The problem exists in the bootloader that the phone ships with out of the factory. After charging a little bit, U-boot will attempt to boot without enough power available, it dies, charges a bit, dies, charges a bit and so on, ad infinitum. There are short-term fixes to get the phone booted right now, plus a long-term fix.
              </p>
              <div className={styles.inlinePageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
              <h2 className={styles.genericHeading}>The short-term fix: maskrom mode</h2>
              <p>
                Your phone will charge without trying to boot up (the trigger for the bootloop) if you place it into maskrom mode. You can charge like this until you have enough power to bypass the bootloop, then charge it as normal from that point on. This is the relatively easy option if you prefer not to mess with your phone's internals or buy extra accessories, it's just that you'll have to do it every time you run out of power and the steps are a bit annoying to do while you're out on the go.
              </p>
              <p><strong>Important note: </strong>Many people think that they need to use a cable plugged into a computer since one of the steps involves running a terminal command, that's certainly the impression the pine wiki gives. That step is actually entirely optional, you can use any usb charging cable or wall socket and just skip that step.</p>
              <p><strong>You will need:</strong> your phone, a USB-C cable plugged into a power source, a pin or needle or something similar,</p>
              <ul>
                <li>
                  Unplug any cables plugged into your phone, remove the back cover, remove the battery and remove the micro sd card if one is present. Your sim card can stay in if you have one.
                </li>
                <li>
                  Reinsert your battery.
                </li>
                <li>
                  Use your pin or needle to hold down the <span className={styles.mono}>RE</span> button inside the back cover of the phone.
                </li>
                <li>
                  Keeping <span className={styles.mono}>RE</span> held, insert the USB-C cable into the charging port. Wait at least 5 seconds after inserting the cable and then release the button.
                </li>
                <li>
                  Optional: if your USB-C cable is plugged into a computer, execute the <span className={styles.mono}>lsusb</span> command in your terminal. If you see whose name includes 'Rockzhuo' then your phone is in maskrom mode. This step is not required, it is just used to verify whether you followed the previous steps correctly. I stopped doing this after the first few times and just started plugging straight into a power brick and not a computer since the power brick will charge the phone faster.
                </li>
                <li>
                  Let the phone charge for at least an hour. After that you should be able to switch on the phone and charge it as normal with a regular cable.
                </li>
              </ul>
              <h2 className={styles.genericHeading}>Alternative: buy some accessories</h2>
              <p>
                There are two accessories sold in the official Pine store that help with this problem. I have both of these and they've made my life a lot easier but you could get by with just having the first one.
              </p>
              <p>
                <strong>External battery charger — $4.99</strong><br />If you've got this then you don't need to follow any of the above steps. Just take your battery out of the phone, put it in the charger, let it charge. There's no bootloop issue in the external charger, so it works exactly as you would expect it to. Just pop the battery in and wait until the light goes green.
              </p>
              <p>
                <strong>Pinephone Pro keyboard — $49.99</strong><br />The keyboard accessory that pine sells is an excellent keyboard in its own right but what a lot of people don't know is that it also doubles up as a 6000mAh external charger. As long as your keyboard is attached it will continuously keep your phone charged. The decent capacity means you're a lot less likely to run out of battery over a day of usage. These days I just keep this permanently attached, I really like typing out texts with the physical buttons.
              </p>
              <p>Of course, the keyboard can only charge a device that is not already bootlooped, so if you're currently at zero power then you need to complete the above steps at least once.</p>
              <div className={styles.inlinePageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
              <h2 className={styles.genericHeading}>The long-term fix: switch your bootloader</h2>
              <p>The solutions so far will work just fine and you can use them indefinitely, but will you still want to do be doing that 12 months from now or even longer? The long-term fix resolves the issue permanently but requires a bit of tinkering.</p>
              <p><strong>The fix:</strong> switch your bootloader from the one that has the bootloop (U-Boot) to one that does not (Tow-Boot). At the phone's launch Tow-Boot was not quite ready to be shipped as the default experience for the Pinephone Pro but that has since changed and new units will now come with it installed (as of August, 2022). If you bought an earlier batch then you'll need to switch to it manually.</p>
              <p>I'll have an illustrated guide covering the installation process soon but for now <a href="https://tow-boot.org/devices/pine64-pinephonePro.html">their wiki has instructions</a>.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <StaticOutro>
        <Container>
          <Row>
            <Col>
              <div className={styles.pageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </StaticOutro>
    </Layout>
  )
}

export default PinephoneProWontCharge
