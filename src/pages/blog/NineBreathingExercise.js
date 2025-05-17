import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function NineBreathingExerciseBlog() {
  return (
    <>
      <Header />
      <article className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-6">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight drop-shadow-lg mb-4 font-serif">
              The Nine Breathing Exercise
            </h1>
            <div className="flex justify-center mb-6">
              <span className="inline-block w-24 h-1 rounded bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></span>
            </div>
            <p className="text-lg text-gray-600 italic">
              A profound healing practice rooted in Tsa-Lung, balancing wind
              energy and clearing internal channels.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              The Nine Breathing Exercise is closely associated with the
              Medicine Buddha and can be considered a powerful healing practice.
              Rooted in the ancient system of{" "}
              <span className="font-semibold">Tsa-Lung</span> (Nadis and Prana),
              this exercise is designed to balance your wind energy (life force)
              and clear the internal energy channels for both health and
              meditation benefits.
            </p>
            <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              Core Benefits
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>
                Clears and opens up the energy channels (Nadis) in the body.
              </li>
              <li>Makes the wind (prana) more serviceable for meditation.</li>
              <li>
                Balances both body and mind through alternate nostril breathing.
              </li>
              <li>Helps in blood circulation and warms up the body.</li>
              <li>
                Stabilizes the mind and improves the functioning of many vital
                organs.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              The Steps
            </h2>
            <div className="space-y-8">
              {/* 1 */}
              <div className="bg-gradient-to-r from-blue-100 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  1. Alternative Nostril Breathing Visualization
                </h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-2">
                  <li>
                    Inhale through your right nostril while visualizing a{" "}
                    <span className="font-bold text-blue-700">white OM</span> at
                    the crown chakra.
                  </li>
                  <li>
                    Transform OM to a{" "}
                    <span className="font-bold text-blue-700">blue AH</span> at
                    the throat chakra and carry it downward with the breath.
                  </li>
                  <li>
                    Hold the AH four fingers below the navel chakra in the form
                    of a{" "}
                    <span className="font-bold text-red-600">red HUNG</span>,
                    surrounded by flames.
                  </li>
                  <li>
                    These flames burn away defilements and negative energies.
                  </li>
                  <li>
                    Hold the breath comfortably (without suffocating), then
                    exhale through your left nostril, imagining a blue HUNG
                    carrying out negativity.
                  </li>
                </ol>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded text-sm text-blue-800 mb-2">
                  <strong>Note:</strong> Do not inhale from the mouth. Cold air
                  can directly affect your lungs. The nostrils filter and warm
                  the air, protecting your respiratory system — especially
                  important at high altitudes.
                </div>
              </div>
              {/* 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  2. Side Twisting (Kidney Massage)
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Understand that palms represent fire and knees/elbows
                    represent water.
                  </li>
                  <li>Hold your breath four fingers below the navel.</li>
                  <li>
                    Twist left with one palm on the kidney and the other on the
                    knee.
                  </li>
                  <li>
                    This transfers warmth and energy to the kidneys, massaging
                    and energizing the water element.
                  </li>
                  <li>Repeat the twist on the right side.</li>
                </ul>
              </div>
              {/* 3 */}
              <div className="bg-gradient-to-r from-blue-100 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  3. Neck and Arm Massage
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Inhale and hold your breath.</li>
                  <li>
                    Interlock your elbows below your chin, and massage along
                    your hairline using your fingers.
                  </li>
                  <li>
                    This activates nerves connected to the brain, improving the
                    nervous system and circulation.
                  </li>
                  <li>Massage your deltoids and continue down each arm.</li>
                  <li>
                    Stretch your arms sideways with interlocked fingers to
                    reduce oblique fat and stretch nearby nerves.
                  </li>
                </ul>
              </div>
              {/* 4 */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  4. Neck Rotation
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Inhale and hold your breath.</li>
                  <li>
                    Rotate your neck three times clockwise, then three times
                    anti-clockwise.
                  </li>
                  <li>
                    This relaxes neck and head muscles, stimulates brain
                    activity, and improves mental clarity.
                  </li>
                </ul>
              </div>
              {/* 5 */}
              <div className="bg-gradient-to-r from-blue-100 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  5. Eye Chakra Exercise
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Inhale and hold the breath.</li>
                  <li>
                    Rotate your eye balls clockwise and anti-clockwise three
                    times.
                  </li>
                  <li>
                    Helps to improve eyesight, relieve headaches from eye
                    strain, and alleviate sinusitis.
                  </li>
                </ul>
              </div>
              {/* 6 */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  6. Chest, Eyes, Scalp, and Ear Massage
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Inhale and hold the breath.</li>
                  <li>Rub your palms vigorously over your chest area.</li>
                  <li>
                    This massages chest muscles and in women, supports the
                    reproductive system and fights breast cancer.
                  </li>
                  <li>With your fingers, gently massage around your eyes.</li>
                  <li>
                    Helps reduce eye bags, dark circles, and other vision
                    problems.
                  </li>
                  <li>Pull and massage your scalp and hair roots.</li>
                  <li>
                    Reduces hair fall and dandruff, promoting hair growth.
                  </li>
                  <li>
                    Finally, massage your ears to stimulate nerves and enhance
                    relaxation.
                  </li>
                </ul>
              </div>
              {/* 7 */}
              <div className="bg-gradient-to-r from-blue-100 to-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  7. Shoulder Blade Exercise
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Inhale and hold your breath.</li>
                  <li>Bring your elbows together at chin level and pull in.</li>
                  <li>
                    Creates pressure at the shoulder joints, loosening
                    stiffness.
                  </li>
                  <li>
                    Then pull the elbows apart, keeping your arms at shoulder
                    length.
                  </li>
                  <li>
                    This releases stress nodes around scapula and trapezius
                    muscles, rejuvenates synovial fluids, and relieves joint
                    pain.
                  </li>
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
