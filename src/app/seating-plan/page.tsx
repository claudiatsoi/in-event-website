'use client';

import { useState } from 'react';

export default function SeatingPlanPage() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  // Sample seating data - customize with actual guest information
  const tables = Array.from({ length: 12 }, (_, i) => ({
    tableNumber: i + 1,
    capacity: 10,
    section: Math.ceil((i + 1) / 4) === 1 ? 'A' : Math.ceil((i + 1) / 4) === 2 ? 'B' : 'C',
    guests: [
      `Guest ${i * 10 + 1}`,
      `Guest ${i * 10 + 2}`,
      `Guest ${i * 10 + 3}`,
      `Guest ${i * 10 + 4}`,
      // Add more guests as needed
    ],
    specialNotes: i % 3 === 0 ? 'Vegetarian meals available' : null,
  }));

  const sections = ['A', 'B', 'C'];
  const selectedTableData = tables.find(t => t.tableNumber === selectedTable);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Seating Plan
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Find your assigned seating for the event
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section A */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Section A
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tables
                .filter(t => t.section === 'A')
                .map((table) => (
                  <button
                    key={table.tableNumber}
                    onClick={() => setSelectedTable(table.tableNumber)}
                    className={`p-4 rounded-lg font-bold text-center transition-all ${
                      selectedTable === table.tableNumber
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-900 hover:bg-blue-50 shadow'
                    }`}
                  >
                    <div className="text-lg">Table {table.tableNumber}</div>
                    <div className="text-xs opacity-75">
                      {table.guests.length}/{table.capacity} guests
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Section B */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Section B
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tables
                .filter(t => t.section === 'B')
                .map((table) => (
                  <button
                    key={table.tableNumber}
                    onClick={() => setSelectedTable(table.tableNumber)}
                    className={`p-4 rounded-lg font-bold text-center transition-all ${
                      selectedTable === table.tableNumber
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-900 hover:bg-blue-50 shadow'
                    }`}
                  >
                    <div className="text-lg">Table {table.tableNumber}</div>
                    <div className="text-xs opacity-75">
                      {table.guests.length}/{table.capacity} guests
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Section C */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Section C
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {tables
                .filter(t => t.section === 'C')
                .map((table) => (
                  <button
                    key={table.tableNumber}
                    onClick={() => setSelectedTable(table.tableNumber)}
                    className={`p-4 rounded-lg font-bold text-center transition-all ${
                      selectedTable === table.tableNumber
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-900 hover:bg-blue-50 shadow'
                    }`}
                  >
                    <div className="text-lg">Table {table.tableNumber}</div>
                    <div className="text-xs opacity-75">
                      {table.guests.length}/{table.capacity} guests
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Selected Table Details */}
        {selectedTableData && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Table {selectedTableData.tableNumber} Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">General Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">
                      Section
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {selectedTableData.section}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">
                      Capacity
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {selectedTableData.capacity} guests
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">
                      Current Guests
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {selectedTableData.guests.length} confirmed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Assigned Guests</h3>
                <ul className="space-y-2">
                  {selectedTableData.guests.map((guest, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-2 bg-gray-50 rounded"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs rounded-full">
                        {i + 1}
                      </span>
                      <span className="text-gray-900">{guest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedTableData.specialNotes && (
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm font-semibold text-amber-900">
                  📌 Special Notes: {selectedTableData.specialNotes}
                </p>
              </div>
            )}
          </div>
        )}

        {!selectedTableData && (
          <div className="mt-12 text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600 text-lg">
              Click on any table to view seating details
            </p>
          </div>
        )}

        {/* Seating Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📋 Seating Policy</h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>✓ Seating has been carefully arranged</li>
              <li>✓ Special dietary needs are noted at each table</li>
              <li>✓ Accessibility accommodations available</li>
              <li>✓ Table changes may be requested at check-in</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-3">🎫 Before You Arrive</h3>
            <ul className="text-purple-800 space-y-2 text-sm">
              <li>✓ Note your table number from this page</li>
              <li>✓ Arrive early for smooth check-in</li>
              <li>✓ Inform staff of any seating issues</li>
              <li>✓ Enjoy networking with your table mates!</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
