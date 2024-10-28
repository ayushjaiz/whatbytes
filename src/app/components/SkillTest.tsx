'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SkillTestDialog from "./Dialog"
import { useScore } from "../context/ScoreContext"

export default function SkillTest() {
  const { rank, percentile, score, setRank, setPercentile, setScore } = useScore();

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [componentRank, setComponentRank] = useState(rank)
  const [componentPercentile, setComponentPercentile] = useState(percentile)
  const [componentScore, setComponentScore] = useState(score)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)

  const handleSave = () => {
    // console.log("Saving:", { rank, percentile, currentScore })

    setRank(componentRank);
    setPercentile(componentPercentile);
    setScore(componentScore);

    closeDialog()
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/html.png"
            alt="HTML5 logo"
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-xl font-semibold">
              Hyper Text Markup Language
            </h3>
            <p className="text-gray-500">
              <span>Questions: 08 </span> |{" "}
              <span>Duration: 15 mins</span> |{" "}
              <span>Submitted on 5 June 2021</span>
            </p>
          </div>
        </div>
        <Button className="bg-blue-500 text-white" onClick={openDialog}>Update</Button>
      </div>

      {isDialogOpen && (
        <SkillTestDialog
          rank={componentRank}
          setRank={setComponentRank}
          percentile={componentPercentile}
          setPercentile={setComponentPercentile}
          currentScore={componentScore}
          setCurrentScore={setComponentScore}
          onClose={closeDialog}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
