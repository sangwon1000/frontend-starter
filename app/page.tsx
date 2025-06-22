'use client'

import { useState } from 'react'
import {
    User,
    TrendingUp,
    Users,
    DollarSign,
    Activity,
    FileText
} from 'lucide-react'

export default function Dashboard() {
    const stats = [
        {
            title: 'Total Users',
            value: '2,847',
            change: '+12%',
            icon: Users,
            color: 'text-blue-600'
        },
        {
            title: 'Revenue',
            value: '$45,231',
            change: '+8.2%',
            icon: DollarSign,
            color: 'text-green-600'
        },
        {
            title: 'Active Projects',
            value: '12',
            change: '+3',
            icon: Activity,
            color: 'text-purple-600'
        },
        {
            title: 'Tasks Completed',
            value: '89',
            change: '+15%',
            icon: FileText,
            color: 'text-orange-600'
        }
    ]

    const recentActivity = [
        {
            id: 1,
            user: 'Sarah Chen',
            action: 'created a new project',
            project: 'E-commerce Platform',
            time: '2 hours ago'
        },
        {
            id: 2,
            user: 'Mike Rodriguez',
            action: 'updated the dashboard',
            project: 'Analytics App',
            time: '4 hours ago'
        },
        {
            id: 3,
            user: 'Emma Wilson',
            action: 'deployed to production',
            project: 'Task Manager',
            time: '6 hours ago'
        },
        {
            id: 4,
            user: 'David Kim',
            action: 'added new feature',
            project: 'CRM System',
            time: '1 day ago'
        }
    ]

    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
                    <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-lg bg-gray-50`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                                <span className="text-sm text-gray-500 ml-1">from last month</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                            <button className="text-primary hover:text-secondary text-sm font-medium">
                                View all
                            </button>
                        </div>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-sm text-gray-600">{activity.project}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                                <FileText className="w-5 h-5 mr-2" />
                                New Project
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                <Users className="w-5 h-5 mr-2" />
                                Invite User
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                <Activity className="w-5 h-5 mr-2" />
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 