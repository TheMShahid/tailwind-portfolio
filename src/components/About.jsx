import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="mt-8 leading-loose text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            illum neque, minus placeat soluta dolores facilis ab saepe vel quos
            aliquam molestias ducimus laboriosam quis impedit consequuntur
            voluptates rerum enim.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
