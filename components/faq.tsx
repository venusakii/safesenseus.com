"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How often should I replace my detector?",
    answer:
      "Most CO and smoke detectors should be replaced every 7-10 years. Check your device's manual for specific recommendations. SafeSense devices include self-testing features to alert you when replacement is needed.",
  },
  {
    question: "Do I need a detector in every room?",
    answer:
      "We recommend placing detectors on every level of your home, especially near sleeping areas and fuel-burning appliances. Bedrooms, hallways, and living spaces are priority locations.",
  },
  {
    question: "What's the difference between CO and smoke detectors?",
    answer:
      "CO detectors sense carbon monoxide gas (invisible, odorless), while smoke detectors sense visible smoke particles. Combination units provide protection against both dangers in a single device.",
  },
  {
    question: "Can I install these myself?",
    answer:
      "Yes! Most SafeSense detectors are designed for easy DIY installation. Simply mount on the wall or ceiling, insert batteries, and follow the setup instructions. Professional installation is also available.",
  },
  {
    question: "How do app notifications work?",
    answer:
      "Smart detectors connect to your home WiFi and send instant alerts to your smartphone when danger is detected. You can monitor air quality, check battery status, and silence alarms remotely.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Clear Answers.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Everything you need to know about SafeSense detectors
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
