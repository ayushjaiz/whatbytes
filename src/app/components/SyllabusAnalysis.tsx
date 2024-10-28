export default function SyllabusAnalysis() {
  const topics = [
    { name: "HTML Tools, Forms, History", percentage: 80, color: "text-blue-500", bgColor: "bg-blue-500", lightColor: "bg-blue-200" },
    { name: "Tags & References in HTML", percentage: 60, color: "text-orange-500", bgColor: "bg-orange-500", lightColor: "bg-orange-200" },
    { name: "Tables & References in HTML", percentage: 24, color: "text-red-500", bgColor: "bg-red-500", lightColor: "bg-red-200" },
    { name: "Tables & CSS Basics", percentage: 96, color: "text-green-500", bgColor: "bg-green-500", lightColor: "bg-green-200" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="text-lg font-semibold pb-6">Syllabus Wise Analysis</h3>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="pb-4">
            {/* Topic Name */}
            <div className="pb-2">
              <span className="text-gray-800 font-medium">{topic.name}</span>
            </div>

            {/* Progress Bar and Percentage */}
            <div className="flex items-center space-x-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className={`${topic.bgColor} rounded-full h-2.5 absolute top-0`}
                  style={{ width: `${topic.percentage}%` }}
                ></div>
                <div
                  className={`${topic.lightColor} h-2.5 absolute top-0 right-0 rounded-full`}
                  style={{ width: `calc(100% - ${topic.percentage}%)` }}
                ></div>
              </div>
              <span className={`${topic.color} font-semibold`}>{topic.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
