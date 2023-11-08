import "./Properties.css";
// import Modal from "./Modal/FirstModal/Modal";
import "../../build/tailwind.css";
// import AccordionProps from "./Accordion";
// import Modal from "./Modal/FirstModal/Modal";
// import BasicAccordion from "./Accordion";
// import { DefaultAccordion } from "./Accordion";
import PropertiesImage from "./PropertiesImg.js";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Properties = () => {
  return (
    <section className="Properties">
      <h1>تحت وب بودن براساس تکنولوژی Asp.net</h1>
      <div className="AccordionFlex">
        <PropertiesImage className="PropertiesImage" />
        <div className="AccordionBorder">
          <Accordion className="w-full" allowMultiple>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-thin text-navy-900 dark:text-white italic "
                    flex="1"
                    textAlign="left"
                  >
                    دسترسی آسان و جهانی
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-justify text-medium mt-2 !text-navy-900 dark:!text-white"
                pb={4}
              >
                یکی از ویژگی‌های متمایز نرم‌افزارهای تحت وب، قابلیت دسترسی آسان
                و بهره‌مندی از آن‌ها به‌صورت جهانی از طریق اینترنت یا اینترانت
                داخلی سازمان است. کاربران می‌توانند بدون نیاز به نصب نرم‌افزارها
                در دستگاه خود، از هر نقطه جغرافیایی به آن‌ها دسترسی یابند، که
                باعث افزایش تسهیل و انعطاف‌پذیری در استفاده از نرم‌افزار
                می‌گردد.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-bold text-navy-900 dark:text-white"
                    flex="1"
                    textAlign="left"
                  >
                    به‌روزرسانی مرکزی و خودکار
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
                pb={4}
              >
                نرم‌افزارهای تحت وب، توانمندی به‌روزرسانی مرکزی دارند،
                به‌گونه‌ای که به‌روزرسانی‌ها و اصلاحات نرم‌افزاری به صورت خودکار
                و بدون دخل و تصرف کاربران، بر روی سرورهای مرکزی اعمال می‌شوند.
                این امر منجر به حفظ امنیت و بهره‌وری بهتر از طریق استفاده از
                آخرین نسخه‌ها می‌گردد.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-bold text-navy-900 dark:text-white"
                    flex="1"
                    textAlign="left"
                  >
                    همگامی با دستگاه‌های مختلف
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
                pb={4}
              >
                نرم‌افزارهای تحت وب به خوبی با اصول طراحی ریسپانسیو سازگاری
                دارند و به طور خودکار تطبیق بهتری با اندازه‌ها و قابلیت‌های
                مختلف دستگاه‌ها ارائه می‌کنند. این ویژگی به کاربران اجازه می‌دهد
                تا بدون دغدغه از نقص و عدم تطابق ظاهری نرم‌افزار با دستگاه مورد
                استفاده خود استفاده کنند.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-bold text-navy-900 dark:text-white"
                    flex="1"
                    textAlign="left"
                  >
                    بهره‌وری مالی
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
                pb={4}
              >
                بدون شک، انتخاب نرم‌افزارهای تحت وب در برخی موارد منجر به
                بهره‌وری مالی بالاتری می‌گردد. با استفاده از مدل‌های اشتراکی و
                عدم نیاز به خرید و نصب تعداد زیادی لایسنس، هزینه‌های اجرای و
                استفاده از نرم‌افزار تا حد قابل ملاحظه‌ای کاهش می‌یابد.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-bold text-navy-900 dark:text-white"
                    flex="1"
                    textAlign="left"
                  >
                    همکاری و اشتراک گذاری آسان
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
                pb={4}
              >
                با توجه به ماهیت تحت وب نرم‌افزارها، کاربران می‌توانند به راحتی
                اطلاعات و داده‌ها را با همکاران خود به اشتراک بگذارند و به صورت
                همزمان در پروژه‌ها همکاری کنند.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
              <h2>
                <AccordionButton className="AccordionFlex">
                  <span
                    className="text-left font-bold text-navy-900 dark:text-white"
                    flex="1"
                    textAlign="left"
                  >
                    نگهداری و پشتیبانی
                  </span>
                  <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
                pb={4}
              >
                نگهداری نرم‌افزارهای تحت وب به مراتب آسان‌تر از نگهداری
                نرم‌افزارهای دسکتاپی است. همچنین، پشتیبانی توسط تیم‌های فنی و
                مهندسی آنلاین انجام می‌شود که می‌توانند به سرعت به مشکلات
                کاربران پاسخ دهند.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* <div className="PropertiesFlex">
        <div className="PropertiesBoxes">
          <div className="PropertiesDesc">
            <div> تحت وب بودن براساس تکنولوژی Asp.net</div>
            <Modal />
          </div>
        </div>
        <div className="PropertiesBoxes">
          <div className="PropertiesDesc">
            <div> تحت وب بودن براساس تکنولوژی Asp.net</div>
            <Modal />
          </div>
        </div>
        <div className="PropertiesBoxes">
          <div className="PropertiesDesc">
            <div> تحت وب بودن براساس تکنولوژی Asp.net</div>
            <Modal />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Properties;
