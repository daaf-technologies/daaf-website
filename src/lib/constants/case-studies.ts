export interface CaseStudyData {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	metaDescription: string;
	clientObjective: string;
	challenges: string[];
	approach: {
		intro: string;
		points: string[];
	};
	solutionSnapshot: {
		intro: string;
		points: string[];
	};
	outcomes: {
		intro: string;
		points: string[];
		quote?: {
			text: string;
			author: string;
		};
	};
	userExperience: {
		intro: string;
		points: string[];
		quote?: {
			text: string;
			author: string;
		};
	};
	securityReliability: {
		intro: string;
		points: string[];
	};
	deliveryTimeline: {
		intro: string;
		points: string[];
	};
	cta: {
		text: string;
		linkText: string;
	};
}

export const caseStudiesData: Record<string, CaseStudyData> = {
	'drone-analytics': {
		id: '1',
		slug: 'drone-analytics',
		title: 'Drone Analytics & NDVI Reporting',
		subtitle:
			'Turning Drone Imagery into Actionable Farm Insights From UAV datasets to NDVI maps and variable-rate prescriptions — delivered in hours, not days.',
		metaDescription:
			'Turning Drone Imagery into Actionable Farm Insights. From UAV datasets to NDVI maps and variable-rate prescriptions — delivered in hours, not days.',
		clientObjective:
			'Farmers and agronomists needed a way to turn raw drone imagery into consistent, calibrated crop health maps. The goal was to transform UAV datasets into actionable insights — from NDVI calculations to variable-rate prescriptions — without the manual processing bottlenecks that delayed decision-making.',
		challenges: [
			'Calibration issues: Raw sensor data required manual correction and standardization',
			'Overwhelming scale: Processing large geospatial datasets was time-consuming',
			'Terrain complexity: Varied field conditions needed adaptive algorithms',
			'Compatibility: Outputs needed to work with existing farm management systems'
		],
		approach: {
			intro:
				'We built an end-to-end pipeline that automates the entire workflow — from raw imagery upload to prescription generation. Our solution includes:',
			points: [
				'Index engine for reflectance correction and calibration',
				'Smart clustering to identify zones based on vegetation health',
				'Prescription builder that generates variable-rate recommendations'
			]
		},
		solutionSnapshot: {
			intro: 'Key functionalities of the developed module:',
			points: [
				'Upload raw imagery (multiple formats supported)',
				'Compute vegetation indices (NDVI, NDRE, and custom indices)',
				'Classify zones automatically using machine learning',
				'Export prescriptions (ISO-XML, Shapefile, PDF formats)',
				'Deliver interactive web maps for field scouting'
			]
		},
		outcomes: {
			intro: 'Measurable benefits achieved:',
			points: [
				'Accelerated scouting: Maps ready in hours instead of days',
				'Improved operational efficiency: Reduced manual processing by 80%',
				'Reduced costs: Faster decision-making led to optimized input usage',
				'Increased consistency: Standardized outputs across all fields'
			],
			quote: {
				text: "DAAF's module helped us go from drone flights to actionable maps in hours, not days.",
				author: 'One agronomist'
			}
		},
		userExperience: {
			intro: 'Key interaction features:',
			points: [
				'Dashboard: Overview of all processed fields and their status',
				'Interactive viewer: Pan, zoom, and explore NDVI maps in real-time',
				'Zone/prescription panel: Adjust thresholds and regenerate prescriptions',
				'PDF reports: Downloadable summaries for field records'
			]
		},
		securityReliability: {
			intro: 'Safeguards implemented:',
			points: [
				'Data isolation: Each organization\'s data is completely segregated',
				'Traceability: Full audit logs for all processing steps',
				'Queue-based processing: Handles large uploads without timeouts',
				'Parallel tiling/caching: Optimized for performance at scale'
			]
		},
		deliveryTimeline: {
			intro: 'Six-week project timeline:',
			points: [
				'Weeks 1-2: Sensor models, calibration pipeline, and index computation engine',
				'Weeks 3-4: Zone classification, prescription builder, and export modules',
				'Week 5: Interactive viewer, dashboard, and UI polish',
				'Week 6: UAT, performance optimization, and documentation'
			]
		},
		cta: {
			text: 'Want to see how drone analytics can transform your farm operations?',
			linkText: 'Contact us at daaf.ae to request the full case study.'
		}
	},
	'geospatial-soil-sampling': {
		id: '2',
		slug: 'geospatial-soil-sampling',
		title: 'Geospatial Soil Sampling Planner',
		subtitle:
			'From Boundaries to Sampling Plans—in Seconds. Turning hand-drawn field outlines into optimized soil sampling points ready for fieldwork and lab intake.',
		metaDescription:
			'From Boundaries to Sampling Plans—in Seconds. Turning hand-drawn field outlines into optimized soil sampling points ready for fieldwork and lab intake.',
		clientObjective:
			'Agronomists needed a way to convert hand-drawn field boundaries into systematic, optimized soil sampling plans. The goal was to automate the planning process — from boundary digitization to generating sampling point coordinates — reducing manual work and ensuring consistent, scientifically sound sampling strategies.',
		challenges: [
			'Geospatial accuracy: Ensuring precise coordinate mapping from hand-drawn inputs',
			'Complex boundaries: Handling irregular field shapes and multi-polygon areas',
			'Performance: Processing large field datasets without lag',
			'Usability: Making complex geospatial planning accessible to non-technical users',
			'Interoperability: Exporting to formats compatible with field equipment and lab systems'
		],
		approach: {
			intro:
				'We developed a geospatial planning module that automates the entire workflow from boundary input to sampling plan generation. Our solution includes:',
			points: [
				'Intelligent boundary digitization and validation',
				'Adaptive sampling algorithms (grid-based, zone-based, random stratified)',
				'Constraint handling (exclusions, buffer zones, accessibility rules)',
				'Multi-format export (Shapefile, KML, CSV, PDF maps)'
			]
		},
		solutionSnapshot: {
			intro: 'Key components of the developed module:',
			points: [
				'Boundary Tools: Draw, upload, or import field boundaries with validation',
				'Sampling Strategies: Grid, zone-based, or custom pattern selection',
				'Constraints: Define exclusion zones, buffer areas, and accessibility rules',
				'ID & Labeling: Automatic point numbering and custom label generation',
				'Exports: Shapefile, KML, CSV coordinates, and printable PDF maps'
			]
		},
		outcomes: {
			intro: 'Measurable benefits achieved:',
			points: [
				'Consistency: Standardized sampling plans across all fields',
				'Speed: Plans generated in seconds instead of hours',
				'Accuracy: Geospatial precision ensures reliable field navigation',
				'Operational Fit: Seamless integration with existing field and lab workflows'
			],
			quote: {
				text: 'What used to take half a day of manual planning and sampling is now done before my coffee gets cold.',
				author: 'One agronomist'
			}
		},
		userExperience: {
			intro: 'Key interaction features:',
			points: [
				'Map Canvas: Interactive drawing and editing of field boundaries',
				'Rules Panel: Configure sampling density, patterns, and constraints',
				'Live Preview: See sampling points update in real-time as rules change',
				'Exports: One-click download in multiple formats'
			],
			quote: {
				text: "DAAF's module helped us go from drone flights to actionable maps in hours, not days.",
				author: 'One agronomist summarized it best:'
			}
		},
		securityReliability: {
			intro: 'Safeguards implemented:',
			points: [
				'RBAC with org-scoped templates: Role-based access ensures data security',
				'Boundaries and outputs: All geospatial data is encrypted and isolated',
				'Audit logs: Complete traceability of all planning activities',
				'Web workers and server jobs: Background processing for large operations'
			]
		},
		deliveryTimeline: {
			intro: 'Four-phase project timeline:',
			points: [
				'Weeks 1-2: Geospatial engine, boundary tools, and sampling algorithms',
				'Weeks 3-4: Constraint system, export modules, and map rendering',
				'Week 5: UI/UX polish, performance optimization, and testing',
				'Week 6: UAT, documentation, and launch preparation'
			]
		},
		cta: {
			text: 'Want to see how geospatial planning can optimize your soil sampling workflows?',
			linkText: 'Contact us at daaf.ae to request the full case study.'
		}
	},
	'soil-sample-visualizer': {
		id: '3',
		slug: 'soil-sample-visualizer',
		title: 'Soil Sample Visualizer',
		subtitle:
			'From Raw Lab CSVs to Actionable Nutrient Reports Transforming soil test results into standardized, visual insights — in minutes, not hours.',
		metaDescription:
			'From Raw Lab CSVs to Actionable Nutrient Reports. Transforming soil test results into standardized, visual insights — in minutes, not hours.',
		clientObjective:
			'Agronomists and farm managers needed a way to process raw lab CSV files and transform them into standardized, visual nutrient reports. The goal was to eliminate manual data entry and spreadsheet manipulation, delivering actionable insights quickly and consistently.',
		challenges: [
			'Non-standard inputs: Different labs use varying CSV formats and column structures',
			'Data quality issues: Missing values, inconsistent units, and formatting errors',
			'Usability gaps: Existing tools required technical expertise to process data',
			'Performance pressure: Large datasets needed fast processing without timeouts',
			'Trust/transparency: Users needed to see data transformations and validation steps'
		],
		approach: {
			intro:
				'We built a CSV-to-Report module that automates the entire data processing pipeline. Our solution includes:',
			points: [
				'Streaming parser: Handles large files without memory issues',
				'Normalization engine: Converts various lab formats to a standard schema',
				'Data validation: Automatic quality checks and error reporting',
				'Interactive reporting layer: Visual dashboards with threshold indicators'
			]
		},
		solutionSnapshot: {
			intro: 'Key components of the developed module:',
			points: [
				'Ingestion & Validation: Upload CSV files with automatic format detection',
				'Normalization: Convert units, standardize column names, and handle missing data',
				'Computation: Calculate nutrient ratios, sufficiency indices, and recommendations',
				'Visualization: Interactive charts, maps, and threshold-based color coding',
				'Delivery: Export to PDF reports, CSV summaries, and shareable links',
				'Admin UX: Lab templates for quick configuration of new data sources'
			]
		},
		outcomes: {
			intro: 'Measurable benefits achieved:',
			points: [
				'Faster decisions: Reports ready in minutes instead of hours',
				'Consistency: Standardized outputs eliminate interpretation errors',
				'Reusability: Lab templates can be configured once and reused',
				'Shareability: Reports can be easily shared with team members and stakeholders'
			]
		},
		userExperience: {
			intro: 'Key interaction features:',
			points: [
				'Upload screen: Drag-and-drop CSV files with progress indicators',
				'Data quality reporting: See validation results and data quality scores',
				'Report dashboard: Interactive charts showing nutrient levels and trends',
				'Threshold legend: Color-coded indicators for nutrient sufficiency levels',
				'Export options: Download PDF reports, CSV summaries, or share links'
			]
		},
		securityReliability: {
			intro: 'Safeguards implemented:',
			points: [
				'RBAC: Role-based access ensures only authorized users can view reports',
				'Secure file handling: Encrypted storage and transmission of sensitive lab data',
				'Audit logs: Complete traceability of all data processing activities',
				'Streaming: Large file processing without memory or timeout issues'
			]
		},
		deliveryTimeline: {
			intro: 'Six-week project timeline:',
			points: [
				'Weeks 1-2: Discovery, CSV parser, normalization engine, and validation system',
				'Weeks 3-4: Build v1 - Visualization layer, computation engine, and export modules',
				'Week 5: Hardening - Performance optimization, error handling, and UI polish',
				'Week 6: UAT & Launch - Testing, documentation, and production deployment'
			]
		},
		cta: {
			text: 'Want to see how automated data processing can streamline your soil analysis workflows?',
			linkText: 'Contact us at daaf.ae to request the full case study.'
		}
	}
};

export const recentCaseStudies = [
	{
		title: 'DAAF: An all-in-one global tax compliance solution',
		author: 'Stephanie Neill',
		slug: 'drone-analytics'
	},
	{
		title: 'A comprehensive worldwide tax compliance platform.',
		author: 'Liam Cartel',
		slug: 'geospatial-soil-sampling'
	},
	{
		title: 'A one-stop shop for handling your global tax compliance needs!',
		author: 'Alex Thompson',
		slug: 'soil-sample-visualizer'
	}
];
