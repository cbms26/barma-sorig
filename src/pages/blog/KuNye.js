import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

import kuNyeImage from "../../assets/images/ku-Nye-blog.jpg";

export default function KuNye() {
  return (
    <>
      <Header />
      <article className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-6">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight drop-shadow-lg mb-4 font-serif">
              Ku-Nye - Traditional Sowa Rigpa Healing Therapy
            </h1>
            <img
              className="mx-auto mb-6 pt-6 rounded-xl shadow-lg max-h-72 object-cover"
              src={kuNyeImage}
              alt="Ku-Nye Healing Therapy"
            />
            <div className="flex justify-center mb-6">
              <span className="inline-block w-24 h-1 rounded bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400"></span>
            </div>
            <p className="text-lg text-gray-600 italic">
              Ancient wisdom, modern healing - a journey through touch and
              tradition.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Traditional healing massage has been practiced for thousands of
              years in Tibet and the Himalayan region of Asia as an integral
              part of Tibetan Medicine. Ku-Nye therapy is taught by Medicine
              Buddha in the last Tantra of the Four Medical Tantras, called
              Gyud-Shi.
            </p>
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-700 bg-blue-50 py-2 mb-6">
              In Tibetan, the word “Ku” means to apply oil and “Nye” means to
              apply pressure with a variety of movements.
            </blockquote>
            <p className="text-gray-800 leading-relaxed">
              In a Ku-Nye treatment, the practitioner focuses on the specific
              points on the body which correspond to different constitutions or
              nature of illnesses. With a special technique and oils, Ku-Nye
              practitioners unblock energy, nerve, blood, and lymph channels and
              bring the three Nyepas or humors back into balance.
            </p>
            <p className="text-gray-800 leading-relaxed mt-4">
              By applying pressure on the tender points — signs of internal
              blockages — one enables the vital force to flow freely, thereby
              restoring health and wellbeing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
              Why Ku-Nye?
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>
                Beneficial as a stand-alone treatment, a preventive measure, and
                a supportive therapy alongside other healing modalities.
              </li>
              <li>
                Excellent for relaxation and promoting general health and
                wellbeing.
              </li>
              <li>
                Aids in longevity by clearing and sharpening the sensory organs
                while supporting internal organs.
              </li>
              <li>
                May include consultation on diet, herbs, and seasonal health
                advice.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
              What Makes It Special?
            </h2>
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-6 mb-4 shadow-inner">
              <p className="text-gray-800 mb-2">
                Massage oils are made by infusing sesame oil with herbs such as
                nutmeg, clove, cardamom, sandalwood, myrobalan, safflower, etc.
              </p>
              <p className="text-gray-800 mb-2">
                After massage, a cleansing technique called{" "}
                <span className="font-semibold text-blue-700">ChiPa</span> is
                used, applying natural powders like tsampa or chickpea flour to
                absorb excess oil and toxins.
              </p>
              <p className="text-gray-800">
                This technique is especially beneficial for obese people or
                those with accumulated toxins.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
              Indications for Ku-Nye Therapy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Neurological:</span> numbness,
                  sciatica, paralysis
                </li>
                <li>
                  <span className="font-semibold">Psychological:</span>{" "}
                  agitation, anxiety, depression, insomnia, poor focus
                </li>
                <li>
                  <span className="font-semibold">Women's Health:</span>{" "}
                  irregular menstruation, PMS
                </li>
                <li>
                  <span className="font-semibold">Pain Relief:</span> migraines,
                  chronic back pain, tension headaches
                </li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Digestive Issues:</span> poor
                  digestion, constipation
                </li>
                <li>
                  <span className="font-semibold">Skin:</span> rough and dry
                  skin
                </li>
                <li>
                  <span className="font-semibold">Others:</span> muscle
                  tightness, joint inflexibility, poor circulation
                </li>
              </ul>
            </div>
            <div className="mt-4 bg-teal-50 rounded p-4 text-teal-800 font-medium shadow">
              Ku-Nye is especially beneficial for: weakened and tired body, aged
              people, malnourished individuals, and those with Wind (rLung)
              imbalance.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
              Before & After Ku-Nye
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Before:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Check health conditions</li>
                  <li>Ensure a warm room</li>
                  <li>Warm your hands</li>
                  <li>Wash hands before and after massage</li>
                  <li>Take deep breaths and relax</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  After:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Feel soft, light, and relaxed</li>
                  <li>Relief from long-term aches</li>
                  <li>Increased energy</li>
                  <li>Enjoy a good night's sleep</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
}
