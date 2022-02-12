import React from "react"
import { BsShieldFillCheck } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { RiHeart2Fill } from "react-icons/ri"

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="white-glassmorphism m-2 flex cursor-pointer flex-row items-start justify-start p-3 hover:shadow-xl">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-1 flex-col">
      <h3 className="mt-2 text-lg text-white">{title}</h3>
      <p className="mt-1 text-sm text-white md:w-9/12">{subtitle}</p>
    </div>
  </div>
)

const Services = () => (
  <div className="gradient-bg-services flex w-full items-center justify-center">
    <div className="mf:flex-row flex flex-col items-center justify-between py-12 px-4 md:p-20">
      <div className="flex flex-1 flex-col items-start justify-start">
        <h1 className="text-gradient py-2 text-3xl text-white sm:text-5xl ">
          Services that we
          <br />
          strive to provide
        </h1>
        <p className="my-2 w-11/12 text-left text-base font-light text-white md:w-9/12">
          The best choice for sending digital messages with your Eth
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-start">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed through our service. We only access what's necessary to complete a transaction."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Gwei rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="We opt to look for the best gas rates that ensure the message is sent for the lowest fees."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="We process your transactions promptly and, depending on the congestion of the network, aim to send your request within 30 seconds."
        />
      </div>
    </div>
  </div>
)

export default Services
