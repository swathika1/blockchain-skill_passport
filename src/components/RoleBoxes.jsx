import React from 'react'

const roles = [
  { id: 'employee', title: 'Employee', desc: 'Access your credentials' },
  { id: 'employer', title: 'Employer', desc: 'Verify candidates' },
  { id: 'institute', title: 'Institute', desc: 'Issue credentials' }
]

export default function RoleBoxes() {
  const [selected, setSelected] = React.useState(null)
  return (
    <div className="roles-wrapper">
      <h2>Select your role</h2>
      <div className="role-grid">
        {roles.map((r) => (
          <button
            key={r.id}
            className={`role-card ${selected === r.id ? 'selected' : ''}`}
            onClick={() => setSelected(r.id)}
          >
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </button>
        ))}
      </div>
      {selected && <p className="selection">Selected: {selected}</p>}
    </div>
  )
}
