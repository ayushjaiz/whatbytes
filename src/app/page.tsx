import SkillTest from './components/SkillTest'
import QuickStatistics from './components/QuickStatistics'
import ComparisonGraph from './components/ComparisonGraph'
import SyllabusAnalysis from './components/SyllabusAnalysis'
import QuestionAnalysis from './components/QuestionAnalysis'

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Skill Test</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5 space-y-8">
          <SkillTest />
          <QuickStatistics />
          <ComparisonGraph />
        </div>
        <div className="w-full lg:w-2/5 space-y-8">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  )
}
