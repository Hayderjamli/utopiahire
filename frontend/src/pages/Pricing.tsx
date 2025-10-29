import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface Tier {
  name: string
  price: string
  period: string
  highlight: boolean
  features: string[]
  cta: string
}

const tiers: Tier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: [
      '5 mock interviews / month',
      'Basic feedback',
      'Community support'
    ],
    cta: 'Get started'
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/mo',
    highlight: true,
    features: [
      'Up to 10 seats',
      'Advanced AI feedback & tips',
      'CV reviewer & enhancer',
      'Job matcher access',
      'Priority support'
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Team',
    price: '$49',
    period: '/mo',
    highlight: false,
    features: [
      'Unlimited mock interviews',
      'Team analytics & insights',
      'Shared questions & templates',
      'Admin controls'
    ],
    cta: 'Contact sales'
  }
]

export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-white to-primary-50/40">
      <section className="container pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 bg-clip-text text-transparent">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a plan that scales with your ambition.
        </p>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl p-8 border ${t.highlight ? 'border-primary-300 shadow-xl bg-white' : 'border-gray-200 shadow-md bg-white/80'} hover:shadow-2xl transition-all`}>
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-gradient-to-r from-primary-600 to-primary-700 text-white px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-500">{t.name}</div>
                <div className="mt-2 flex items-end justify-center gap-1">
                  <div className="text-4xl font-extrabold text-gray-900">{t.price}</div>
                  <div className="text-gray-500 mb-1">{t.period}</div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <FaCheck className="text-green-600 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold shadow ${t.highlight ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-xl' : 'bg-white border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600'}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
